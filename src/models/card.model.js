const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

let cardSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    tipo: Number
})

module.exports = mongoose.model('Card', cardSchema)