const users = require("../data/users");

const userCheck = (req, res) => {
  const { id } = req.params;

  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === id) {
      res.status(200);
      res.send(users[i]);
      return;
    }
    res.status(404);
    res.send({"message": "Нет пользователя с таким id"});
    return;
  }
};

module.exports = userCheck;