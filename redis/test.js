const Redis = require('ioredis');

const createRedis = function (config) {
    return new Redis.Cluster([{
        host: "3.112.21.169",
        port: 7001
    }], {
        scaleReads: 'slave',
        dnsLookup: (address, callback) => callback(null, address),
        keyPrefix: '{stratum10}:',
        redisOptions: {
            password: 'chainsAb@'
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

redisClient.info((error, response) => {
    if (error) {
        console.log('error: ', error);
    }

    let parts = response.split('\r\n');
    let version;
    let versionString;
    for (let i = 0; i < parts.length; i++) {
        if (parts[i].indexOf(':') !== -1) {
            let valParts = parts[i].split(':');
            if (valParts[0] === 'redis_version') {
                versionString = valParts[1];
                version = parseFloat(versionString);
                break;
            }
        }
    }

    console.log('version: ', version);

    if (!version) {
        console.log('Could not detect redis version - must be super old or broken');
    } else if (version < 2.6) {
        console.log('You are using redis version ' + versionString + ' the minimum required version is 2.6. Follow the damn usage instructions...');
    }
});