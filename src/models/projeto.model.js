const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

let projetoSchema = new mongoose.Schema({
    nome: String,
    categoria: String,
    descricao: String,
    ativo: Boolean,
    dataCadastro: String,
    dataAtualizacao: String,
    tempoExecucao: Number,
    cards: [
        { 
            cardId: ObjectId,
            titulo: String,
            descricao: String,
            tipoId: ObjectId,
            tipo: Number,
            mapper: [
                [String]
            ],
            endpoint: {
                producao: String,
                homologacao: String,
                ativo: Number
            },
            config: {
                width: String,
                height: String,
                eixoX: String,
                eixoY: String,
                colors: [String],
                labels: [String]
            }
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