const users = require("../data/users");

let checkContainer = false;

const userCheck = (req, res) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === req.params.id) {
      checkContainer = users[i]
    }}
    if (!checkContainer) {
      res.send({"message": "Нет пользователя с таким id"});
    } res.send(checkContainer);
};

module.exports = userCheck;