// 管道流
// nodejs中的管道流，提供了一个从输出流到输入流的机制
// 从一个流当中获取数据，并传递到另一个流当中

const fs = require('fs');
let data = '';

//创建一个可读流和一个可写流
let readStream1 = fs.createReadStream('inputDemo.txt');
let writeStream1 = fs.createWriteStream('outputDemo2.txt');

//管道流操作 把读取的数据直接输出到另一个流里面
readStream1.pipe(writeStream1);




console.log('执行完了');
