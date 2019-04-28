let controller = require('../controllers/card.controller')

let routerValidation = require('../shared/validations/router.validation')
let express = require('express')
let router = express.Router()

const _baseUrl = '/cards'

router.get(_baseUrl, (req, res) => {
    controller.ListarCards(req, res)
})

module.exports = router
