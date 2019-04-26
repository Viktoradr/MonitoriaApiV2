let ProjetoModel = require('../models/projeto.model')
let express = require('express')
let router = express.Router()

// QueryString => Query property on the request object
// localhost:3000/projeto?id=1001&usuarioId=10
router.get('/projeto', (req, res) => {
    if (req.query.id) {
        res.send(`You have requested a project ${req.query.id}`)
    }
    else {
        res.send('You have requested a project')
    }
})

router.get('/projeto/:id', (req, res) => {
    //res.send(`You have requested a project ${req.params.id}`);

    if (!req.params.id) {
        return res.status(400).send('Misssing URL parameter: id')
    }

    ProjetoModel.findById(req.params.id)
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err))
})

router.post('/projeto/add', (req, res) => {
    if (!req.body) {
        return res.status(400).send('Request body is missing')
    }

    let model = new ProjetoModel(req.body)

    model.save()
        .then(doc => {
            if (!doc || doc.length === 0) return res.status(500).send(doc)
            res.status(201)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/projeto/atualizar', (req, res) => {
    if (!req.body._id) {
        return res.status(400).send('Misssing URL parameter: id')
    }

    ProjetoModel.findOneAndUpdate({
        _id: req.body._id
    }, req.body, {
        new: true
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err))
})

router.delete('/projeto/remover', (req, res) => {
    if (!req.body._id) {
        return res.status(400).send('Misssing URL parameter: id')
    }

    ProjetoModel.findOneAndRemove({
        _id: req.body._id
    })
    .then(doc => res.json(doc))
    .catch(err => res.status(500).json(err))
})

module.exports = router

