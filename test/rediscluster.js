const Redis = require('ioredis');

const r = new Redis.Cluster([{
    host: "r-uf63fz2xsen4dfxl4zpd.redis.rds.aliyuncs.com",
    port: 6379
  }], {
    scaleReads: 'slave',
    dnsLookup: (address, callback) => callback(null, address),
    redisOptions: {
    //   tls: true,
      password: "chainsAb@"
    },
    // keyPrefix: '{ironfish-stratum}:'
  });

// const r = new Redis([{
// host: "127.0.0.1",
// port: 6379
// }], {
// // scaleReads: 'slave',
// // dnsLookup: (address, callback) => callback(null, address),
// // redisOptions: {
// //     // tls: true,
// //     password: "chainsAb@"
// // },
// keyPrefix: '{ironfish-stratum}:'
// });


// r.set("k2","v1")

const coin = 'ironfish'
const workerId = '8'
const worker = 'hentai8'
const difficulty = 1234.0
const redisCommands = [];
redisCommands.push(['hincrbyfloat', `${coin}:share:validCurrent`, `${workerId}:${worker}`, difficulty]);

r.multi(redisCommands).exec((err) => {
  if (err) {
      Logger.error('redis exec error:%o', err);
      return;
  }
});