const http = require('http');


// console.log(http.createServer())

http.createServer(function (request,response) {
//    http头部的信息
//    状态码：200
//    内容的类型：text/plain,xml,html...
//     response.writeHead(200,{'Content-Type':'text/plain;charset:utf-8'});
//    设置text/plain纯文本，设置为utf8防止乱码
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
//    向客户端发送
//     response.write('<head><meta charset="utf-8"/></head>');
    response.end('<h1>第一个http服务</h1>');

//    监听一个端口号
}).listen(5249);

console.log("5249已经创建")


