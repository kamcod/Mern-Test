require('dotenv').config()
require('express-async-errors');
const express = require('express')
const app = express()

const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

const connectDB = require('./db/connect')
const registerRoutes = require('./routes/register')
const jobsRoutes = require('./routes/jobs')
const authentication = require('./middlewares/authentication')
const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(xss())

app.use('/app', registerRoutes)
// app.use('/app', authentication, jobsRoutes)
app.use('/app', jobsRoutes)
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
