const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/router');

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
app.use(router);
app.get('*', (req, res) => {
  res.status(400).send({ message: 'Страница не найдена' });
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
