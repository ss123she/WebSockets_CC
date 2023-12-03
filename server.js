// index.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { startWebSocketServer } = require('./websocketModule');
const WebSocket = require('ws');

const setup = { port: 8000 };
const wsPort = 9000;
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

app.listen(setup.port, () => {
    console.log('Server running on port %s', setup.port);
});
