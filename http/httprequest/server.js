const http = require('http');

const requestListener = function (req, res) {
//   res.writeHead(200);
  const subscribed = {
    id:0,
    method:"mining.subscribed",
    body:{
       clientId: 2,
       graffiti: 'hentai8'
    }
 }
 const subscribedString = JSON.stringify(subscribed)
  res.end(subscribedString);
}

const server = http.createServer(requestListener);
server.listen(9046);