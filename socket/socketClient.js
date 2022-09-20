// var is_support = ("WebSocket" in window);
// const io = require('socket.io')(server);
const net = require('net')
var client = new net.Socket();
client.setKeepAlive(true)
client.connect(9034, '18.162.116.194', function() {
    console.log('Connected');
    const data = `{"id":0,"method":"mining.subscribe","body":{"version":1,"publicAddress":"30b0dec8147d66f8812195906b7af4f9e3647610a524d4bd588b731159663a89f2a6debc2649a01635bf8e"}}`
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
    client.destory();
  });
  




