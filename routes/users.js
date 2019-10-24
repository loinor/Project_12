const users = require("../data/users");

const userData = (req, res) => {
  res.status(200);
  res.send(users);
};

module.exports = userData;
