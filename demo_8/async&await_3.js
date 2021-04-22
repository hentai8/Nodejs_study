// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    })
}

async function testResult () {
    let first = await doubleAfter2seconds(10);
    let second = await doubleAfter2seconds(20);
    console.log(first + second);
}

testResult();
// 意思是 await所生成的变量会等待后面的函数运行完 下文中所有引用到该变量的部分都会等待