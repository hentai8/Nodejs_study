const Redis = require('ioredis');

async function main1(){
    const createRedis = function (config) {
        return new Redis.Cluster([{
            host: config.host,
            port: config.port
        }], {
            scaleReads: 'slave',
            dnsLookup: (address, callback) => callback(null, address),
            keyPrefix: '{stratum10}:',
            redisOptions: {
                password: config.auth
            }
        });
    };
    
    const redisClient = createRedis({
        enabled: true,
        host: '3.112.21.169',
        port: 7001,
        auth: 'chainsAb@',
        db: 0
    });
    
    // const redisClient = createRedis({
    //     enabled: true,
    //     host: '127.0.0.1',
    //     port: 6379,
    //     // auth: '',
    //     // db: 0
    // });
    
    
    
    
    
    
    // redisClient.info((error, response) => {
    //     if (error) {
    //         console.log('error: ', error);
    //     }
    
    //     let parts = response.split('\r\n');
    //     let version;
    //     let versionString;
    //     for (let i = 0; i < parts.length; i++) {
    //         if (parts[i].indexOf(':') !== -1) {
    //             let valParts = parts[i].split(':');
    //             if (valParts[0] === 'redis_version') {
    //                 versionString = valParts[1];
    //                 version = parseFloat(versionString);
    //                 break;
    //             }
    //         }
    //     }
    
    //     console.log('version: ', version);
    
    //     if (!version) {
    //         console.log('Could not detect redis version - must be super old or broken');
    //     } else if (version < 2.6) {
    //         console.log('You are using redis version ' + versionString + ' the minimum required version is 2.6. Follow the damn usage instructions...');
    //     }
    // });
    
    
    const obj ={
        k1:"v111",
        k2:"v2"
    }
    
    await redisClient.hmset("obj1", obj)
    await redisClient.set("k2", "v2")
    console.log("obj2")

    const k2 = await redisClient.get("k2")
    console.log(k2)

    const obj2 = await redisClient.hgetall("obj1")
    
    console.log(obj2.k1)
}


main1()