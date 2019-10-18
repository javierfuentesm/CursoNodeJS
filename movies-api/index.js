const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/json', (req, res) => {
  res.send({ hello: 'world' });
});

app.get('/year/:year2', (req, res) => {
  const leapyear = year => {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  };
  res.send(
    leapyear(req.params.year2) ? 'El año es bisiesto' : 'El año no es bisiesto'
  );
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
