//express nodejs的中间件框架
//app.get() app.post()


const express = require('express');
app = express();


// console.log(express);

app.get('/',function (req, res) {
    res.send('创建一个服务');

});

app.listen(5444,function () {
    console.log('5444已经启动');
});

