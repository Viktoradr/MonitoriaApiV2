const mongoose = require('mongoose')

// const server = 'cluster0-zhpvr.azure.mongodb.net'
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

// const database = 'Monitoria';
// const uri = `mongodb://localhost:27017/${database}`;

const database = 'dashboard_v2';
const uri = `mongodb://10.21.0.67:27017/${database}`;

mongoose.connect(uri, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;

module.exports = db