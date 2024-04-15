const { sequelize } = require('./db'); // 假设你已经在 db.js 中导出了 sequelize 和其他需要的模型
const { payment, miner_wallet } = require('./db');

process.on('message', async ({ balances, paid }) => {
  try {
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
          console.log("!!!!!!!!!!!!!!!!!!updateData Deadlock detected, retrying...");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          continue;
        }
        await transaction.rollback();
        err = error;
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    if (finished) process.send({ success: true });
    else process.send({ error: err.message });
  } catch (error) {
    process.send({ error: error.message });
  }
});
