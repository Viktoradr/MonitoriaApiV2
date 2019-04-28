let controller = require('../controllers/projeto.controller')

let routerValidation = require('../shared/validations/router.validation')
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

router.get('/projetos', (req, res) => {
    controller.ListarProjetos(req, res)
})

router.get('/projetos/:id', (req, res) => {
    routerValidation.ValidarParametro(req, res)
    controller.BuscarProjetoById(req, res)
})

router.post('/projetos/add', (req, res) => {
    routerValidation.ValidarBody(req, res)
    controller.AdicionarProjeto(req, res)
    console.log('Router Post')
})

router.put('/projetos/atualizar', (req, res) => {
    routerValidation.ValidarBodyId(req.body._id, res)
    controller.AtualizarProjeto(req, res)
})

router.delete('/projetos/remover', (req, res) => {
    routerValidation.ValidarBodyId(req.body._id, res)
    controller.RemoverProjeto(req, res)
})

module.exports = router

