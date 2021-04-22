const fs = require('fs');

//要写入的内容
let data = "数据";

//要创建一个可以写入的流
let writeStream1 = fs.createWriteStream('outputDemo.txt');

//设置编码
writeStream1.write(data,'utf-8');

//标记文件末尾
writeStream1.on('finish',function () {
    console.log('写入完成');
});

console.log('执行完毕');