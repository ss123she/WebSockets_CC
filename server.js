const ws = require("ws")
const wss = new ws.Server({port:8081})
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const server = http.createServer(app);

const PORT = 8081;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

wss.on("connection",ws=>{
    console.log("connection!")
    ws.on("message",msg=>{
        wss.broadcast(JSON.stringify({func:msg.toString()}))
    })
});

wss.broadcast = function broadcast(msg){
    wss.clients.forEach(function each(client) {
        client.send(msg)
    });
};