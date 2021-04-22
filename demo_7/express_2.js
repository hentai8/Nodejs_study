// express实现简单的路由

const express = require('express');
app = express();


// console.log(express);

app.get('/',function (req, res) {
    res.send('创建一个服务<br><a href="/a">a</a>' +
        '<br><a href="/b">b</a>' +
        '<br><a href="/c">c</a>');

});

app.get('/a',function (req, res) {
    res.send('这是a页面<br><a href="/a/a1">a1</a>');

});

app.get('/b',function (req, res) {
    res.send('这是b页面<br><a href="/b/b1">b1</a>');

});

app.get('/c',function (req, res) {
    res.send('这是c页面');

});

app.get('/a/a1',function (req, res) {
    res.send('这是a里面的a1页面');

});

app.get('/b/b1',function (req, res) {
    res.send('这是b里面的b1页面<br><a href="/b/b1/b1_1">b1_1</a>');

});

app.get('/b/b1/b1_1',function (req, res) {
    res.send('这是b里面的b1里面的b1_1页面');

});

app.listen(5444,function () {
    console.log('5444已经启动');
});
