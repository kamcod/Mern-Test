require('dotenv').config({path: './config/config.env'})
require('express-async-errors');
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const routes = require('./routes/main')
const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

app.use(express.json())

app.use('/app', routes)
app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 5000;

const start = async () =>{
    await connectDB(process.env.MONGO_URI)
    console.log("DB is connected!")
    app.listen(port, () => {
        console.log(`server is listening at http://localhost:${port}`)
    })
}

start()
