// 公开整个模块


function exports_2() {
    this.a = 111;
    this.b = function () {
        console.log('输出b');
    }
}


module.exports = exports_2;