const { time } = require('console');
var net = require('net');
var server = net.createServer(function (connection) {
   console.log('client connected');
   connection.on('end', function () {
      console.log('客户端关闭连接');
   });
   connection.on('data', function (data) {
      console.log("!!receive:", data.toString());
      // client.end();
   });
   const subscribed = {
      id: 0,
      method: 'mining.subscribed',
      body: {
         clientId: 2,
         graffiti: 'hentai8'
      }
   }
   const subscribedString = JSON.stringify(subscribed) + '\n'

   const target = {
      id: 0,
      method: 'mining.set_target',
      body: {
         target: '00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471'
      }
   }
   const targetString = JSON.stringify(target) + '\n'

   const notify = {
      id: 0,
      method: 'mining.notify',
      body: {
         miningRequestId: 5,
         header: '0000000000000000cf0e020000000000000000000002aaced825176dd9db0701c995760a03a1f42c69b63b4b7d4090b0ff7f32477b07a0cc3c89d6f6335433def2d95ff91be838ae47212ba43794901bb0ce220200000000f6ee7f75663920ae6d8617379629d5130323e6e20c5e19cb5606c71bb97ed7e668d5130100000000000000000007b87e00ba71e3b4a9a27d79dad30a55297da63550092644b289502c8efe8f82010000000000007736f4a168656e7461693800000000000000000000000000000000000000000000000000'
      }
   }
   const notifyString = JSON.stringify(notify) + '\n'



   // connection.write(subscribedString);
   setTimeout(function () {
      console.log(subscribedString)
      connection.write(subscribedString);
      setTimeout(function () {
         console.log(targetString)
         connection.write(targetString);
         setTimeout(function () {
            console.log(notifyString)
            connection.write(notifyString);
         }, 1000);
      }, 1000);
   }, 1000);
   // connection.write(`{"target":"00000b2f4fc0794908cf232ff78625902416a7530755a66c5788c4a6d5331471"}`);
   // connection.write(`{
   //    "miningRequestId": "5",
   //    "header": "0000000000000000cf0e020000000000000000000002aaced825176dd9db0701c995760a03a1f42c69b63b4b7d4090b0ff7f32477b07a0cc3c89d6f6335433def2d95ff91be838ae47212ba43794901bb0ce220200000000f6ee7f75663920ae6d8617379629d5130323e6e20c5e19cb5606c71bb97ed7e668d5130100000000000000000007b87e00ba71e3b4a9a27d79dad30a55297da63550092644b289502c8efe8f82010000000000007736f4a168656e7461693800000000000000000000000000000000000000000000000000"
   //  }`);
   connection.pipe(connection);
});
server.listen(9046, function () {
   console.log('server is listening');
});




