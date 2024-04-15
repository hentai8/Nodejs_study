const { sequelize } = require('./db'); // 假设你已经在 db.js 中导出了 sequelize 和其他需要的模型
const { block, miner_wallet } = require('./db');

const existMiners = new Set();


process.on('message', async ({ blocks, balances, times }) => {
  try {
    times = times ? times : 0;
    if (blocks.length === 0 && balances.length === 0) {
      // 这里可能需要做一些清理工作
      process.send({ success: true });
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
      process.send({ success: true });
    } catch (error) {
      await transaction.rollback();
      console.log("%o", error);
      console.log("Data: %o %o", blocks, balances);
      times++;
      if (times >= 5) {
        console.log("Has tried 5 times");
        // 这里可能需要做一些错误处理
        process.send({ error: error.message });
      } else {
        process.send({ retry: true, blocks, balances, times });
      }
    }
  } catch (error) {
    process.send({ error: error.message });
  }
});
