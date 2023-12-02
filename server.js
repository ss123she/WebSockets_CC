const setup = { port: 8000 };
const express = require('express');
const app = express();

// Используйте express.json() и express.urlencoded() для обработки данных
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/computer', (req, res) => {
    console.log(`Full name is: ${req.body.fname} ${req.body.lname}.`);
    res.json({ status: 'success', message: 'Data received successfully.' });
});

// Разместите этот маршрут перед express.static
app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer/computer.html');
});

app.use(express.static('public'));

app.get('/gta', (req, res) => {
    res.sendFile(__dirname + '/public/gta/gta.html');
});

app.listen(setup.port, () => {
    console.log('Сервер запущен: порт %s', setup.port);
});