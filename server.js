const setup = { port: 8000 };
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Используйте body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/computer', (req, res) => {
    res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer/computer.html');
});
app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

app.listen(setup.port, () => {
    console.log('Сервер запущен: порт %s', setup.port);
});