const Card = require("../models/cardsModel");

const getCards = ((req, res) => {
  Card.find({})
    .then(cards => res.send({data: cards}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}));
});

const createCard = ((req, res) => {
  const { name, link} = req.body;

  Card.create({name, link, owner: req.user._id, likes: req.user._id })
    .then(card => res.send({data: card}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}));
});

const deleteCard = ((req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then(card => res.send({data: card}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}));
});

module.exports = {
  getCards, createCard, deleteCard
};