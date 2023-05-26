const net = require('net');

// 创建服务器
const server = net.createServer((socket) => {
  console.log('客户端已连接');

  // 监听接收到数据事件
  socket.on('data', (data) => {
    console.log('从客户端接收到数据：', data.toString());

    // 向客户端发送数据
    socket.write('Hello, Client!');
  });

  // 监听连接关闭事件
  socket.on('close', () => {
    console.log('客户端已断开连接');
  });

  // 监听连接错误事件
  socket.on('error', (error) => {
    console.error('连接发生错误：', error);
  });
});

// 监听服务器启动事件
server.listen(9999, '0.0.0.0', () => {
  console.log('服务器已启动，正在监听端口 9999');
});