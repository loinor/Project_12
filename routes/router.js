/* eslint-disable object-curly-newline */
const router = require('express').Router();
const { getUsers, getUsersById, createUsers, login } = require('../controllers/userControler');
const { getCards, createCard, deleteCard } = require('../controllers/cardControler');
const auth = require('../middlewares/auth');

router.get('/cards', auth, getCards);
router.post('/cards', auth, createCard);
router.delete('/cards/:cardId', auth, deleteCard);
router.get('/users', auth, getUsers);
router.get('/users/:id', auth, getUsersById);
router.post('/signin', login);
router.post('/signup', createUsers);

module.exports = router;
