const { Sequelize, DataTypes, Transaction } = require("sequelize");
const sequelize = new Sequelize("alephium", "root", "1007", {
  host: "localhost",
  dialect: "mysql",
});

const existMiners = new Set();

// console.log("sequelize: %", sequelize);

const payment = sequelize.define(
  "payment",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    miner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tx: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

const miner_wallet = sequelize.define(
  "miner_wallet",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    miner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL(30, 12),
      allowNull: false,
    },
    paid: {
      type: DataTypes.DECIMAL(30, 12),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

const block = sequelize.define(
  "block",
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
    },
    height: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "x",
    },
    worker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tx: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    reward: {
      type: DataTypes.DECIMAL(50, 12),
      allowNull: false,
    },
    commission: {
      type: DataTypes.DECIMAL(50, 12),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    difficulty: {
      type: DataTypes.DECIMAL(30, 4),
      allowNull: false,
      defaultValue: 1,
    },
    share: {
      type: DataTypes.JSON,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    timestamps: true,
  }
);

async function updateData(balances, paid) {
  let finished = false;
  let err = null;

  for (let i = 0; i < 50; i++) {
    const transaction = await sequelize.transaction({});
    try {
      // 存储payment信息
      await payment.bulkCreate(paid, { transaction });
      // 累减balance，累加已支付
      for (const item of balances) {
        await miner_wallet.increment(
          {
            balance: 0 - item.balance,
            paid: item.paid,
          },
          {
            where: {
              miner: item.miner,
            },
            transaction,
          }
        );
      }

      await transaction.commit();
      console.log("Success to update transaction commit");
      finished = true;
      break;
    } catch (error) {
      console.log("updateData error: %o", error);
      if (
        error.name === "SequelizeDatabaseError" &&
        error.parent &&
        error.parent.errno === 1213
      ) {
        // 如果是死锁, 则稍后再试，而不是直接退出循环
        console.log("updateData Deadlock detected, retrying...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        continue;
      }
      await transaction.rollback();
      err = error;
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  if (finished) return true;
  else throw err;
}

async function handleDatabaseUpdate(blocks, balances, times) {
  times = times ? times : 0;
  if (blocks.length === 0 && balances.length === 0) {
    await this.clearLock();
    return;
  }

  const transaction = await sequelize.transaction({});
  try {
    // 更新区块
    await block.bulkCreate(blocks, {
      updateOnDuplicate: [
        "height",
        "status",
        "reward",
        "commission",
        "updated_at",
      ],
      transaction,
    });

    // 累加余额
    for (const { miner, balance } of balances) {
      if (!existMiners.has(miner)) {
        await miner_wallet.findOrCreate({
          where: { miner },
          defaults: { balance: 0, paid: 0 },
          transaction,
        });
        existMiners.add(miner);
      }
      await miner_wallet.increment(
        { balance },
        {
          where: { miner },
          transaction,
        }
      );
    }

    await transaction.commit();

    // 删除锁
    // await this.clearLock();

    console.log("Finished unlocker job");
  } catch (error) {
    await transaction.rollback();
    console.log("%o", error);
    console.log("Data: %o %o", blocks, balances);
    times++;
    if (times >= 5) {
      console.log("Has tried 5 times");
      mail(
        "unlockerSaveError",
        `${this.config.coin}结算存储失败`,
        `失败详情：${JSON.stringify(error)}`
      );
      await this.clearLock();
    } else {
      setTimeout(() => {
        this.handleDatabaseUpdate(blocks, balances, times);
      }, 1000);
    }
  }
}

async function main() {
  await sequelize.sync({ force: true });

  // 创建初始数据
  const miner = "miner1";
  await miner_wallet.create({ miner: miner, balance: 10, paid: 0 });

  // 准备要传递给 updateData 和 handleDatabaseUpdate 的数据
  const balances = [];
  const paid = [];
  const blocks = [];

  for (let i = 1; i <= 100; i++) {
    let miner = `miner${i}`;
    let tx = `tx${i}`;
    let balance = { miner: miner, balance: 1, paid: 0 };
    let payment = { miner: miner, tx: tx, amount: 1 };
    let block = { height: i, worker: miner, reward: 1, commission: 0 };

    balances.push(balance);
    paid.push(payment);
    blocks.push(block);
  }

  //   同时运行 updateData 和 handleDatabaseUpdate
  //   await Promise.all([
  //     updateData(balances, paid),
  //     handleDatabaseUpdate(blocks, balances, 0),
  //   ]);
  const tasks = [];
  for (let i = 0; i < 100; i++) {
    tasks.push(updateData(balances, paid));
    tasks.push(handleDatabaseUpdate(blocks, balances, 0));
  }

  await Promise.all(tasks);
}

main()
  .catch(console.error)
  .finally(() => sequelize.close());
