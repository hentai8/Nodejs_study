// get请求

const http = require('http');
const util = require('util');
const url = require('url');


http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain;charset = utf-8'});
    //response.end方法 只能向界面发送字符串
    // response.end('123');

    //将接受到的url信息展示出来 即/?a=1&b=2&c=3
    // response.end(request.url);
    response.end(util.inspect(url.parse(request.url)));

}).listen(5444);

console.log('5444已经启动');

// 访问http://localhost:5444
// 可以通过http://localhost:5444/?a=1&b=2&c=3传abc的值