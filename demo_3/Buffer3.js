//

const buffer1 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
//转成JSON字符串
const json1 = JSON.stringify(buffer1)
console.log(buffer1);
console.log(json1);
console.log(typeof json1);
//转成JSON对象
console.log(JSON.parse(json1));
console.log(typeof JSON.parse(json1));
//获取JSON对象里的数据
console.log(JSON.parse(json1).data);
console.log(JSON.parse(json1).data[0]);