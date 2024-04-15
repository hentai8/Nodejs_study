const { Sequelize, DataTypes, Transaction } = require("sequelize");
const { fork } = require("child_process");
const { sequelize, payment, miner_wallet, block } = require("./db");

// 然后你可以在你的代码中使用 sequelize、payment、miner_wallet 和 block

// ...其他的模型定义代码...

async function main() {
  await sequelize.sync({ force: true });

  // 创建初始数据
  for (let i = 1; i <= 100; i++) {
    let miner = `miner${i}`;
    await miner_wallet.create({ miner: miner, balance: 10, paid: 0 });
  }


  // 准备要传递给 updateData 和 handleDatabaseUpdate 的数据
  const balances = [];
  const paid = [];
  const blocks = [];

  const balances1 = [];
  const paid1 = [];
  const blocks1 = [];

  for (let j = 1; j <= 100; j++) {
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

    for (let i = 100; i >= 1; i--) {
      let miner = `miner${i}`;
      let tx = `tx${i}`;
      let balance = { miner: miner, balance: 1, paid: 0 };
      let payment = { miner: miner, tx: tx, amount: 1 };
      let block = { height: i, worker: miner, reward: 1, commission: 0 };

      balances1.push(balance);
      paid1.push(payment);
      blocks1.push(block);
    }

    // 创建新的进程并运行 updateData 和 handleDatabaseUpdate
    const updateDataProcess = fork("./updateData.js");
    const handleDatabaseUpdateProcess = fork("./handleDatabaseUpdate.js");

    updateDataProcess.on("message", (message) => {
      if (message.error) {
        console.error("Error in updateData:", message.error);
      } else {
        console.log("updateData finished successfully");
      }
    });

    handleDatabaseUpdateProcess.on("message", (message) => {
      if (message.error) {
        console.error("Error in handleDatabaseUpdate:", message.error);
      } else if (message.retry) {
        handleDatabaseUpdateProcess.send({
          blocks: message.blocks,
          balances: message.balances,
          times: message.times,
        });
      } else {
        console.log("handleDatabaseUpdate finished successfully");
      }
    });

    // 发送数据到新的进程
    updateDataProcess.send({ balances, paid });
    // handleDatabaseUpdateProcess.send({ blocks1, balances1, times: 0 });
  }
}

main()
  .catch(console.error)
  .finally(() => sequelize.close());
