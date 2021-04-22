const express = require('express');
app = express();


// console.log(express);

//设置静态目录
app.use(express.static('staticDev'));



app.listen(5444,function () {
    console.log('5444，静态目录已经启动');
});

