const setup = { port: 8000 };
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/computer', (req, res) => {
    console.log(`Full name is: ${req.body.fname} ${req.body.lname}.`);
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