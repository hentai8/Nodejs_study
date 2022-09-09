// var is_support = ("WebSocket" in window);
// const io = require('socket.io')(server);
const net = require('net')
var client = new net.Socket();
client.setKeepAlive(true)
client.connect(8020, '127.0.0.1', function() {
    console.log('Connected');
    const data = `{"type": "message", "data": {"mid": 1, "type": "node/getStatus"}}`
    // client.write('data');
    client.write(data);
    // client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
    console.log('Received: ' + data);
});
client.on('close', function() {
    console.log('Connection closed');
});
client.on('error', function(exception){
    console.log('Exception:');
    console.log(exception);
  });
  





