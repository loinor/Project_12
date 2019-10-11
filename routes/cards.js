const cards = require("../data/users.json");

const cardData = (req, res) => {
  res.status(200);
  res.send(cards);
};

module.exports = cardData;
