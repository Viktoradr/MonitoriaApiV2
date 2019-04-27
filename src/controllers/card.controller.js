const Card = require('../models/card.model');

exports.ListarCards = function (req, res) {
    Card.find()
        .then(doc => res.json(doc))
        .catch(err => res.status(500).json(err))
};