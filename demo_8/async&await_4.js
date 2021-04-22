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
    let res = first + second;
    return res;
}

testResult().then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
});