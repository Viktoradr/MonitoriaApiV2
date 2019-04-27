let controller = require('../controllers/usuario.controller')

let routerValidation = require('../shared/validations/router.validation')
let express = require('express')
let router = express.Router()

router.get('/usuarios', (req, res) => {
    controller.ListarUsuarios(req, res)
})

module.exports = router
