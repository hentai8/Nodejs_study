function a(callback) {
    alert("执行完我才是其他函数");
    alert("调用回调函数");
    callback();
}

function b() {
    alert("我是回调函数b");
}

function c() {
    alert("我是回调函数c");
}


function test() {
    a(b);
    a(c);
}

a(b);
a(c);