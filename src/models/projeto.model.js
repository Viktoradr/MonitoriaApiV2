const mongoose = require('mongoose')

const server = 'cluster0-zhpvr.azure.mongodb.net'
const database = 'Monitoria'
const user = 'Victor'
const password = 'V0302adr'

const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false  });

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