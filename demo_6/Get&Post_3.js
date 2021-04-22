// post 请求

const http = require('http');
const util = require('util');
const url = require('url');
const querystring = require('querystring');


const formHtml = '<form method = "post">'
    +'名字：<input name="name"><br>'
    +'年龄：<input name="age"><br>'
    +'<input type="submit">'
    +'</form>';


http.createServer(function (request,response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    let body = '';
    //监听 如果一旦有信息提交 就加到body里面
    request.on('data',function (a) {
        body += a;
    });
    //监听 如果信息提交完毕了 输出
    request.on('end',function () {

        body = querystring.parse(body);
        console.log(body);
        //如果未定义（未输入值）则展示输入窗口，如果输入了 就展示输入的信息
        if(typeof body.name == "undefined"){
            response.write(formHtml);
            response.write('空');
            // response.write('姓名：'+body.name);
            // response.write('<br>');
            // response.write('年龄：'+body.age);
        }else {
            response.write('姓名：'+body.name);
            response.write('<br>');
            response.write('年龄：'+body.age);
            // response.write(formHtml);
            // response.write('空');
        }
        response.end();
    });

    // response.end();
}).listen(5444);

console.log('5444已经启动');

// 访问http://localhost:5444
// 可以通过http://localhost:5444/?a=1&b=2&c=3传abc的值