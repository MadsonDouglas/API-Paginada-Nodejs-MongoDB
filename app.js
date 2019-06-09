const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('mongoose')
db.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
require('./src/models/Product')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api',require('./src/routers'))



app.listen(process.env.PORT | 3001, () => console.log('server rodando'));