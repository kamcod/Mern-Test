require('dotenv').config({path: './config/config.env'})
const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const port = 5000;

const start = async () =>{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
        console.log(`server is listening at port ${port}`)
    })
}

start()
