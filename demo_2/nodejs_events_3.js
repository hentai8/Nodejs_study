//传参
// 可以在一个实例上的一个方法上 绑定多个事件 并且通过同一个emit()方法触发 并传参

const events = require('events');

const EventEmitter1 = new events.EventEmitter();


//绑定
EventEmitter1.on('fun',function (arg1, arg2) {
    console.log('First', arg1);
});

EventEmitter1.on('fun',function (arg1, arg2) {
    console.log('Second', arg2);
});

EventEmitter1.emit('fun','111','222');