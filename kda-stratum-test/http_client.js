const net = require("net");
const http = require('http');

s = 0;

function connectToServer() {
  const options = {
    hostname: 'localhost',
    port: 6611,
    path: '/',
    method: 'GET',
  };
  
  const req = http.request(options, (res) => {
    res.on('data', (data) => {
      console.log(data.toString());
    });
  });
  
  req.on('error', (error) => {
    console.error('Error:', error.message);
  });
  
  req.end();
}
while (s < 49000) {
  connectToServer();
  s++;
}

console.log("right");

// 创建数据包
function createPacket(payload) {
  const packetLength = Buffer.byteLength(payload);
  const header = Buffer.alloc(4);
  header.writeInt32BE(packetLength, 0);

  const packet = Buffer.concat([header, Buffer.from(payload)]);
  return packet;
}

// 构造数据包
function constructPacket(id, method, params) {
  const packetObj = {
    id: id,
    method: method,
    params: params,
  };

  const packetStr = JSON.stringify(packetObj);
  return packetStr;
}
