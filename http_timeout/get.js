const http = require('http');
const https = require('https');

const options = {
    hostname: '127.0.0.1',
    port: 9046,
    method: 'GET',
    // timeout: 1
};

http.get(options, (incomingMessage) => {
    let data = '';
    incomingMessage.setEncoding('utf8');
    incomingMessage.on('data', (chunk) => {
        data += chunk;
    });
    incomingMessage.on('end', () => {
        let dataJson = null;
        console.log(data);
    });
})
