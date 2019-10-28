const router = require("express").Router();
const { getUsers, getUsersById, createUsers } = require("../controllers/userControler");
const { getCards, createCard, deleteCard } = require("../controllers/cardControler");

router.get("/cards", getCards);
router.post("/cards", createCard);
router.delete("/cards/:cardId", deleteCard);
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUsers);

module.exports = router;
