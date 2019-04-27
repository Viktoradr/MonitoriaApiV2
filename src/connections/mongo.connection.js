const mongoose = require('mongoose')

const server = 'cluster0-zhpvr.azure.mongodb.net'
const database = 'test'
const user = 'Victor'
const password = 'V0302adr'

const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false  });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

module.exports = db