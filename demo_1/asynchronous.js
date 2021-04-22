// 这是一个基于回调的非阻塞的文件读取的例子
//异步读取文件readFile
//不需要等待文件读取完成，就可以在读取文件的时候，继续执行下面的代码

const fs = require('fs');

//第一个参数是要读取的文件
//第二个参数是处理读取到的文件的内容的回调函数
fs.readFile('asynchronous.txt',function (err,data) {
    if(err) return err;
    console.log(data.toString())
})


console.log('__________');
console.log('js已经执行结束');


