const t = Date.now()
const ts = Math.round(new Date().getTime() / 1000);
console.log(t)
console.log(ts)

function reverseByteOrder(buff) {
    for (var i = 0; i < 8; i++) buff.writeUInt32LE(buff.readUInt32BE(i * 4), i * 4);
    return reverseBuffer(buff);
};

function reverseBuffer(buff) {
    var reversed = Buffer.alloc(buff.length);
    for (var i = buff.length - 1; i >= 0; i--)
        reversed[buff.length - i - 1] = buff[i];
    return reversed;
};
const prehash = 'eb569d85057669c25bac7c2b8f36e483058936efac6ded37ae031849d7992f6c';
const prehashHandled = reverseByteOrder(Buffer.from(prehash, 'hex')).toString('hex')
const prehashHandled2 = reverseByteOrder(Buffer.from(prehashHandled, 'hex')).toString('hex')

console.log(prehash)
console.log(prehashHandled)
console.log(prehashHandled2)

