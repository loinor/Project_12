const mongoose = require("mongoose");

const cardsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function(urlStr) {
        // eslint-disable-next-line no-useless-escape
        return /(www\.)?([0-9]{3}\.[0-9]{3}\.[0-9]{3}\.[0-9]{3}|\w{1,}[\.]\w{1,})(:[0-9]{4})?\.+#?/.test(urlStr);
      },
      message: "Введен некорректный URL"
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("card", cardsSchema);