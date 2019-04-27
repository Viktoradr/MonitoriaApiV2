let express = require('express')
let app = express()

let projetoRoute = require('./routes/projeto.route')
let usuarioRoute = require('./routes/usuario.route')
let cardRoute = require('./routes/card.route')

let path = require('path')
let bodyParser = require('body-parser')

const conn = require('./connections/mongo.connection')

app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(projetoRoute)
app.use(usuarioRoute)
app.use(cardRoute)
app.use(express.static('public'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('You cannot pass through!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))