const http = require('http');

const postIronfish = (url, path, params) => {
    return new Promise((resolve, reject) => {
        // 处理 url
        options = {
            hostname: (typeof (hostname) === 'undefined' ? '127.0.0.1' : hostname),
            port: 8023,
            method: 'POST',
            path: path,
            headers: {
                'Content-Length': String(params).length
            }
        };
        // 发起请求
        console.log(options)
        let clientRequest = http.request(options, (incomingMessage) => {
            let data = '';
            incomingMessage.setEncoding('utf8');
            incomingMessage.on('data', (chunk) => {
                data += chunk;
            });
            incomingMessage.on('end', () => {
                let dataJson = null;

                try {

                    console.log(data);
                    if (data.indexOf(':-nan') !== -1) {
                        data = data.replace(/:-nan,/g, ":0");
                        dataJson = JSON.parse(data);
                    } else {
                        dataJson = JSON.parse(data);
                    }

                    resolve(dataJson);

                } catch (e) {
                    reject({
                        error: { type: 'parse err', message: e, data },
                        result: null,
                        data: null
                    });
                }
            });
        });

        clientRequest.setTimeout(10 * 1000, () => {
            clientRequest.destroy(new Error('timeout'));
        });

        clientRequest.on('error', (e) => {
            if (e.code === 'ECONNREFUSED') {
                reject({
                    error: { type: 'offline', message: e.message },
                    result: null,
                    data: null
                });
            } else {
                reject({
                    error: { type: 'request error', message: e.message },
                    result: null,
                    data: null
                });
            }
        });
        console.log(params);
        clientRequest.end(params);
    });
};

let params = {
    fromAccountName: "default",
    fee: 100,
    receives: [
        {
            publicAddress: '7fab9c2930115475a1a9e078118f82aaea029d01b00770ecd9e78e25e7ad96bbeb1d0b14a4a33d73c27588',
            amount: 3563,
            memo: 'hentai8'
        }
    ]
}

postIronfish('127.0.0.1:8023', '/transaction/sendTransaction', JSON.stringify(params))