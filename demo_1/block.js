//同步读取文件readFileSync
//Sync 同步
//这种操作会形成阻塞
const fs = require('fs');

// console.log(fs);

const data = fs.readFileSync('block.txt');
//输出二进制的流操作
console.log(data);
//变成string输出
console.log(data.toString());
console.log('----------');
console.log('文件读取结束');


