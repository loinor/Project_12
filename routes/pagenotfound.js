const pageCheck = (req, res) => {
  if (/\/users/ || /\/cards/) {
    res.status(404);
    res.send({"message": "Запрашиваемый ресурс не найден"})
  }
};

module.exports = pageCheck;
