const events = require('events');

const EventEmitter1 = new events.EventEmitter();


//绑定
EventEmitter1.on('timeout',function () {
    console.log('timeout事件已经被触发了');
});

//设置一个定时器触发 设定事件为2000ms
setTimeout(function () {
    EventEmitter1.emit('timeout');
},2000);

