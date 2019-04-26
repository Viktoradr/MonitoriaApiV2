let mongoose = require('mongoose')

const server = 'cluster0-zhpvr.azure.mongodb.net'
const database = 'test'
const user = 'Victor'
const password = 'V0302adr'

const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true });

let projetoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    ativo: Boolean,
    dataCadastro: String,
    dataAtualizacao: String
})

module.exports = mongoose.model('Projeto', projetoSchema)