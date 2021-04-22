//通过链式流压缩文件

const fs = require('fs');
const zlib = require('zlib');


//读取文件 通过管道 先新建压缩包 再把文件写入压缩包内
fs.createReadStream('inputDemo.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('outputDemo3.txt.gz'));


console.log('压缩完了');
