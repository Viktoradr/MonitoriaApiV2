const mongoose = require('mongoose')

const server = 'cluster0-zhpvr.azure.mongodb.net'
const database = 'Monitoria'
const user = 'Victor'
const password = 'V0302adr'

const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`;

mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false  });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once('open', function() {
    console.log('open connection in mongoDB'); 
});
db.on('connected', function () {  
    console.log('creating connection with mongoDB');
}); 
db.on('error',function (err) {  
    console.log('connection error: ' + err);
}); 
db.on('disconnected', function () {  
    console.log('connection disconnected 0f mongoDB'); 
});

module.exports = db