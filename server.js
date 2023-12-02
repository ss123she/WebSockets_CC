const setup = { port: 8000 };
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ws = require('ws');
const wsServer = new ws.Server({port: 9000});

users = 0;
wsServer.on('connection', function() {
    console.log("пользователь " + users + " подключился");
    users++;
    console.log("current users: " + users);
});
wsServer.on('error', function() {
    console.error("Error with WebSocket connection")
});
wsServer.on('close', function() {
    console.log("WebSocket connection closed")
    users = users - 1;
    console.log("current users: " + users);
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer/computer.html');
});+

app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

app.post('/button1', (req, res) => {
    console.log('success');
});
app.listen(setup.port, () => {
    console.log('Сервер запущен: порт %s', setup.port);
});