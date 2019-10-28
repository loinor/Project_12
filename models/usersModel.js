const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function(urlStr) {
        // eslint-disable-next-line no-useless-escape
        return /(www\.)?([0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}|\w{1,}[\.]\w{1,})(:[0-9]{4})?\.+#?/.test(urlStr);
      },
      message: "Введен некорректный URL"
    }
  }
});

module.exports = mongoose.model("user", userSchema);