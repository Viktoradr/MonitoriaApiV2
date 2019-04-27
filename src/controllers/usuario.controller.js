const Usuario = require('../models/usuario.model');

exports.ListarUsuarios = function (req, res) {
    Usuario.find()
        .then(doc => res.json(doc))
        .catch(err => res.status(500).json(err))
};