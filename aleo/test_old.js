const height = 363;
const reward = 5 * parseInt(((15768000 - height) * (Math.pow(10, 9) / (15768000 * 15768001))) * Math.pow(10, 6))
console.log(reward)
console.log(reward / 128)