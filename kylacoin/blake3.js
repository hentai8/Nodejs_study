const blake3 = require('blake3')

const x = "1"

const y = blake3.hash(x)

console.log(y)