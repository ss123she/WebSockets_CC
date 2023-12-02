const setup = { port: 8000 };
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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