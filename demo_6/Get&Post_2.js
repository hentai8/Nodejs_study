// Get请求

const http = require('http');
const util = require('util');
const url = require('url');


http.createServer(function (request,response) {
    // response.writeHead(200,{'Content-Type':'text/plain;charset = utf-8'});
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const param1 = url.parse(request.url,true).query;
    console.log(param1);
    // response.end(util.inspect(url.parse(request.url)));
    response.write('姓名：'+param1.name);
    response.end();
}).listen(5444);

console.log('5444已经启动');

// 访问http://localhost:5444
// 可以通过http://localhost:5444/?a=1&b=2&c=3传abc的值