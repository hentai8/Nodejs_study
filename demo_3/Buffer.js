
//不用引入 直接可以用
//表示长度是10 用0填充
const buffer1 = Buffer.alloc(10);

let test1 = buffer1.write('abc');

console.log(buffer1);
//直接输出的话是字节长度 英文是一个字母一个字节
console.log('写入的字节数'+test1);
//toString的默认编码是utf8
console.log(buffer1.toString())




const buffer2 = Buffer.alloc(10);

let test2 = buffer2.write('快乐');

console.log(buffer2);
//直接输出的话是字节长度 中文是一个汉字三个字节
console.log('写入的字节数'+test2);

console.log(buffer2.toString())
console.log(buffer2.toString('utf8', 0, 3))