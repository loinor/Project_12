const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/router");
const bodyParser = require("body-parser");

// eslint-disable-next-line no-undef
const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: "5db1b21533ccc13b2ddd9559"
  };

  next();
});

mongoose.connect("mongodb://localhost:27017/mestodb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
app.use(router);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
