const mongoose = require('mongoose');
// eslint-disable-next-line import/no-unresolved
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: (props) => `${props.value} Неверный URL`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
