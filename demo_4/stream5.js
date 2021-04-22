//通过链式流解压文件

const fs = require('fs');
const zlib = require('zlib');


//读取压缩文件 通过管道 先解压压缩包 再把文件写入outputDemo5内
fs.createReadStream('outputDemo3.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('outputDemo5.txt'));


console.log('解压完了');
