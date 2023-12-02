// index.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { startWebSocketServer } = require('./websocketModule');

const setup = { port: 8000 };
const wsPort = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer/computer.html');
});

app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

// Добавим WebSocket сервер внутри express сервера
const wsServer = startWebSocketServer(wsPort);

app.post('/button1', (req, res) => {
    console.log('success');

    const data = 'print("ok")';

    // Отправка сообщения на все подключенные клиенты по WebSocket
    wsServer.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    });

    res.send('Message sent to all WebSocket clients.');
});

app.listen(setup.port, () => {
    console.log('Server running on port %s', setup.port);
});
