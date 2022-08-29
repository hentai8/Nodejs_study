let s = '123.234.456'

const result = s.split('.')[4]

console.log(result)

if(s.split('.')[4]==undefined){
    s += '.678'
}
console.log(s)