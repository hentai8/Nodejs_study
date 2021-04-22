// nodejs的事件

const events = require('events');

// console.log(events);

//EventEmitter的实例化
const EventEmitter1 = new events.EventEmitter();

//这里的事件名 不同于浏览器上的各种事件 这里的事件是一个“标识”
//其实是绑定了一个回调 或者说是绑定了一个函数
//需要先绑定才能触发 这有严格的先后关系
EventEmitter1.on('xx123',function () {
    console.log('xx123事件已经被触发');
    EventEmitter1.emit('xx456');
});




//查看EventEmitter1的信息 其中事件的数量变成1了
// console.log(EventEmitter1);

EventEmitter1.on('xx456',function () {
    console.log('xx456事件已经被触发');
});

//方法定义可以写在里面 也可以写在外面
EventEmitter1.on('xx789fn',xx789function)

function xx789function(){
    console.log('xx789事件已经被触发');
}



//触发一个事件
EventEmitter1.emit('xx123');
EventEmitter1.emit('xx456');
EventEmitter1.emit('xx789fn');


//查看EventEmitter1的信息 其中事件的数量变成1了
// console.log(EventEmitter1);