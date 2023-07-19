const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  // 模拟处理请求的时间较长，实际应用中可能是一些耗时的操作
  setTimeout(() => {
    socket.write('Hello, client!');
    socket.end();
    console.log('Response sent');
  }, 5000); // 这里故意将处理时间设置为5秒钟
});

const PORT = 6611;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
