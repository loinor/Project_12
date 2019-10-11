const router = require("express").Router();
const cardData = require("./cards");
const userData = require("./users");
const userCheck = require("./checkUsers");
const pageCheck = require("./pagenotfound");

router.get("/cards", cardData);
router.get("/users", userData);
router.get("/users/:id", userCheck);
router.get("/", pageCheck);

module.exports = router;
