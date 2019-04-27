const mongoose = require('mongoose')

let projetoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    ativo: Boolean,
    dataCadastro: String,
    dataAtualizacao: String,
    //cards: [{ body: String, date: Date }],
    //usuarios: [{}]
})

module.exports = mongoose.model('Projeto', projetoSchema)