const mongoose = require('mongoose')

// const server = 'cluster0-zhpvr.azure.mongodb.net'
const database = 'Monitoria'
// const user = 'Victor'
// const password = 'V0302adr'

// const uri = `mongodb+srv://${user}:${password}@${server}/${database}?retryWrites=true`;

const options = {
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const uri = `mongodb://localhost:27017/${database}`;

mongoose.connect(uri, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

module.exports = db