// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

// 定义了一个异步的function
async function testResult () {
    console.log('内部调用前') // 2
    let result = await doubleAfter2seconds(30);
    console.log(result); // 4
    console.log('内部调用后') // 5
}

console.log('外部调用前') // 1
testResult();
console.log('外部调用后') // 3
// --- 依次输出
// 外部调用前
// 内部调用前
// 外部调用后
// --- 2s 之后输出
// 60
// 内部调用后
// 意思是 await所生成的变量会等待后面的函数运行完 下文中所有引用到该变量的部分都会等待