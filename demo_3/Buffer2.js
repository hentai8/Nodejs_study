// 批量输出26个字母


const buffer1 = Buffer.alloc(26);

for(let i =0;i<26;i++){
    buffer1[i] = i+97;
}

console.log(buffer1);
console.log(buffer1.toString());
console.log(buffer1.toString('ascii'));
console.log(buffer1.toString('utf8'));