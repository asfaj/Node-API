const express = require('express')
const app = express()

const port = 5000

const productRoute = require('./routes/productRoute')
const connectMongoDB = require('./connection')
const URL = "mongodb+srv://asfajabeen:asfa.123@cluster.a3aivmk.mongodb.net/nodePI?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/products',productRoute)
connectMongoDB(app,port,URL)




