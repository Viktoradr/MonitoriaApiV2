const Projeto = require('../models/projeto.model');

exports.ListarProjetos = function (req, res) {
    Projeto.find()
        .then(doc => res.json(doc))
        .catch(err => res.status(500).json(err))
};

exports.BuscarProjetoById = function (req, res) {
    Projeto.findById(req.params.id)
        .then(doc => res.json(doc))
        .catch(err => res.status(500).json(err))
};

exports.AdicionarProjeto = function (req, res) {
    let model = new Projeto(req.body)

    model.save().then(doc => res.json(doc)
        // {
        //     if (!doc || doc.length === 0) return res.status(500).send(doc)
        //     return res.status(201)
        // }
    ).catch(err => res.status(500).json(err))
};

exports.AtualizarProjeto = function (req, res) {
    Projeto.updateOne({
        _id: req.body._id
    }, req.body, {
            new: true
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err))
};

exports.RemoverProjeto = function (req, res) {
    Projeto.remove({
        _id: req.body._id
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err))
};



