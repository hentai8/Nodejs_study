const http = require('http');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 模拟处理请求的时间较长，实际应用中可能是一些耗时的操作
  setTimeout(() => {
    // console.log(456)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
  }, 10000); // 这里故意将处理时间设置为5秒钟
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, world!');
//   console.log(123)
});

const PORT = 6611;

// 启动服务器
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
