require('dotenv').config({path: './config/config.env'})
require('express-async-errors');
const express = require('express')
const app = express()

const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limiter')

const connectDB = require('./db/connect')
const routes = require('./routes/main')
const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }))
  
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xss())

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
