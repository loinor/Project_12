/* eslint-disable no-undef */
require('dotenv').config();

const express = require('express');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Скоро упадет железный наш друг - сервер');
  }, 0);
});

app.use(router);

app.use(errorLogger);

app.use(errors());

app.get('*', (req, res) => {
  res.status(400).send({ message: 'Страница не найдена' });
});

app.use((err, req, res) => {
  const { statusCode = 500, message } = err;
  return res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
