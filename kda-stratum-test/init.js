const net = require("net");

s = 0;

function connectToServer() {
  const socket = net.createConnection({
    host: "127.0.0.1", // 替换为目标主机的 IP 地址或域名
    port: 6611, // 替换为目标主机的端口号
  });

  // 监听连接成功事件
  socket.on("connect", () => {
    console.log("已成功连接到服务器");

    socket.write(
      '{"id": "mining.subscribe", "method": "mining.subscribe", "params": [ "GodMiner/2.0.0", null ]}\n'
    );
    socket.write(
      '{"id": "mining.authorize", "method": "mining.authorize", "params": ["huanghuang93.hmc","x"]}\n'
    );
  });

  // 监听接收到数据事件
  socket.on("data", (data) => {
    // console.log("从服务器接收到数据：", data.toString());
  });

  // 监听连接关闭事件
  socket.on("close", () => {
    console.log("连接已关闭");
    // 断开连接后重新连接
    connectToServer();
  });

  // 监听连接错误事件
  socket.on("error", (error) => {
    console.error("连接发生错误：", error);
    // 断开连接后重新连接
    connectToServer();
  });
}
while (s < 4900) {
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
