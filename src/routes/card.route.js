let controller = require('../controllers/card.controller')

let routerValidation = require('../shared/validations/router.validation')
let express = require('express')
let router = express.Router()

router.get('/cards', (req, res) => {
    controller.ListarCards(req, res)
})

module.exports = router
