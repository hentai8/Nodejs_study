//steam流



const fs = require('fs');
let data = '';

// console.log(fs);

let readStream1 = fs.createReadStream('inputDemo.txt');
//输出可读流的相关属性和信息
// console.log(readStream1)

//设置可读流的文件编码 utf-8
readStream1.setEncoding('utf-8');

//处理流的事件 data end error
//data 当有数据可读时触发
readStream1.on('data',function (String1) {
    data += String1;
});

//end 当没有数据可读取时（数据读完时）触发
readStream1.on('end',function () {
    console.log(data);
});


//由于是回调函数，所以先输出下面的读取完毕
console.log('读取完毕');