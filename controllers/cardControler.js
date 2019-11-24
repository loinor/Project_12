/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
const Card = require('../models/cardsModel');

const NotFoundError = require('../errors/not-found-err');
const RightsError = require('../errors/rights-err');

const getCards = ((req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch(next);
});

const createCard = ((req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id, likes: req.user._id })
    .then((card) => res.status(201).send({ data: card }))
    .catch(next);
});

const deleteCard = ((req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Нет карточки с таким id');
      } else {
        if (card.owner.toString() !== req.user._id.toString()) {
          throw new RightsError('Недостаточно прав');
        }
        res.send({ data: card });
      }
    })
    .catch(next);
});

module.exports = {
  getCards, createCard, deleteCard,
};
