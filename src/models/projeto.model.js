const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

let projetoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    ativo: Boolean,
    dataCadastro: String,
    dataAtualizacao: String,
    cards: [
        { 
            
        }
    ],
    usuarios: [{
        usuarioId: ObjectId,
        nome: String,
        permissoes: [
            {
                permissaoId: ObjectId,
                descricao: String,
                ativo: Boolean
            }
        ]
    }]
})

module.exports = mongoose.model('Projeto', projetoSchema)