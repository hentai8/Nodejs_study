const { time } = require('console');
const http = require('http');

const requestListener = function (req, res) {
    //   res.writeHead(200);
    const subscribed = {
        id: 0,
        method: "mining.subscribed",
        body: {
            clientId: 2,
            graffiti: 'hentai8'
        }
    }
    setTimeout(() => {
        const subscribedString = JSON.stringify(subscribed)
        res.end(subscribedString);
    }, 10000);
}

const server = http.createServer(requestListener);
server.listen(9046);