// const t = Date.now()
// const ts = Math.round(new Date().getTime() / 1000);
// console.log(t)
// console.log(ts)

// function reverseByteOrder(buff) {
//     for (var i = 0; i < 8; i++) buff.writeUInt32LE(buff.readUInt32BE(i * 4), i * 4);
//     return reverseBuffer(buff);
// };

// function reverseBuffer(buff) {
//     var reversed = Buffer.alloc(buff.length);
//     for (var i = buff.length - 1; i >= 0; i--)
//         reversed[buff.length - i - 1] = buff[i];
//     return reversed;
// };
// const prehash = 'eb569d85057669c25bac7c2b8f36e483058936efac6ded37ae031849d7992f6c';
// const prehashHandled = reverseByteOrder(Buffer.from(prehash, 'hex')).toString('hex')
// const prehashHandled2 = reverseByteOrder(Buffer.from(prehashHandled, 'hex')).toString('hex')

// console.log(prehash)
// console.log(prehashHandled)
// console.log(prehashHandled2)

// const nVersion = '20000000'
// const version = parseInt(nVersion, 16);
// console.log(version)


const nBits = '0x1a015b4b'
// const data = nBits.toString(2)
console.log(nBits)
// console.log(data)
var exp = nBits
// 二进制运算，整除2^24
exp >>= 24;
// 二进制与运算，取出低24位
var mantissa = nBits & 0xffffff;
var targetNum = mantissa * Math.pow(256, (exp - 3))

target = (Array(64).join('0') + targetNum.toString(16)).slice(-64)

// const target = parseInt(nBits, 16);
console.log(exp)
console.log(mantissa)
console.log(targetNum.toString(16))
console.log(target)