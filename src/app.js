let express = require('express')
let app = express()
let routes = require('./routes/routes')
let bodyParser = require('body-parser')
let cors = require('cors')

let conn = require('./connections/mongo.connection')

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})

// app.use(express.static('public'))

// Enable Cors
// var allowedOrigins = ['http://localhost:3000']
app.use(cors())
// app.use((req, res, next) => {

//     if(req.method === 'OPTIONS') {
//         let headers = {};

//         headers["Access-Control-Allow-Origin"]      = "*";
//         headers["Access-Control-Allow-Methods"]     = "POST, GET, PUT, DELETE, OPTIONS";
//         headers["Access-Control-Allow-Credentials"] = false;
//         headers["Access-Control-Allow-Headers"]     = "Origin, Authorization, Accept, Content-Type, x-access-token";
//         res.writeHead(200, headers)
//         res.end()

//     } else {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//         res.header("Access-Control-Allow-Credentials", false);
//         res.header("Access-Control-Allow-Headers", "Origin, Authorization, Accept, Content-Type, x-access-token");
//         next();
//     }
// });

app.use("/api", routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))