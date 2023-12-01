  const setup = {port:8000}
  const express = require ('express');
  const app = express ();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('public'));

  app.get('/computer', (req, res) => {
    res.sendFile(__dirname + '/public/computer.html');
  });

  app.post('/submit', (req, res) => {
    const data = req.body.data;

    console.log(`Полученные данные: ${data}`);

    res.json({ message: 'Данные успешно отправлены!' });
});

  app.listen(setup.port, () => {
    console.log('Сервер запущен: порт %s', setup.port);
  });