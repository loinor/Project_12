const Card = require("../models/cardsModel");

module.exports.getCards = ((req, res) => {
  Card.find({})
    .then(cards => res.send({data: cards}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}))
});

module.exports.createCard = ((req, res) => {
  console.log(req.user._id);
  const { name, link, userId} = req.body

  Card.create({name, link, owner: req.user._id, likes: req.user._id })
    .then(card => res.send({data: card}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}));
});

module.exports.deleteCard = ((req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then(card => res.send({data: card}))
    .catch(() => res.status(500).send({message: "Произошла ошибка"}));
});