// let s = '123.234.456'

// const result = s.split('.')[4]

// console.log(result)

// if(s.split('.')[4]==undefined){
//     s += '.678'
// }
// console.log(s)

let head = "00000000000341490d404a82440d621c2377761b5ea58494e181f5262f60da47 (169860)"
let hashrate = head.split(' ')[0]
let height = head.split('(')[1].split(')')[0]

console.log("hashrate:", hashrate)
console.log("height:", height)