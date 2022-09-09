const http = require('http');
http.get("http://18.162.116.194:8023/node/getStatus", function (res) {
// http.get("http://www.baidu.com", function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
}).on('error', function (e) {
    console.log("Got error: " + e.message);
});