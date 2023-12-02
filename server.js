const setup = { port: 8000 };
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });
// Используйте body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer/computer.html');
});
app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

app.post('/submit', (req, res) => {
    const data = req.body.data;
    console.log(`Полученные данные: ${data}`);
    res.json({ message: 'Данные успешно отправлены!' });
});

app.listen(setup.port, () => {
    console.log('Сервер запущен: порт %s', setup.port);
});

server.listen(3000, () => {
    console.log('WebSocket server listening on http://localhost:3000');
  });