const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

let usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    login: String,
    senha: String,
    ativo: Boolean,
    perfil: Number
})

module.exports = mongoose.model('Usuario', usuarioSchema)