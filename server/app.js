require('dotenv').config()
require('express-async-errors');
const express = require('express')
const http = require('http');
const app = express()
const server = http.createServer(app);
const {Server} = require('socket.io');

const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const connectDB = require('./db/connect')
const registerRoutes = require('./routes/register')
const jobsRoutes = require('./routes/jobs')
const adminRoutes = require('./routes/admin')
const authentication = require('./middlewares/authentication')


const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

const io = new Server(server, {
    cors: {
        origin: process.env.frontend_domain,
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("socket connected")
    socket.on("join_room", (room) => {
        socket.join(room);
    })
    socket.on("send_message", (data) => {
        // socket.broadcast.emit("receive_message", {message: `your message has been received: > " ${data.message} "`})
        socket.to(data.room).emit("receive_message", data);
    })
});

app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );


app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


app.use(cookieParser());
app.use(xss())
app.use(cors({ credentials: true, origin: process.env.frontend_domain }))
app.use(helmet())
app.use('/app', registerRoutes)
app.use('/app/admin', authentication, adminRoutes)
app.use('/app', authentication, jobsRoutes)

// app.use('/app', jobsRoutes)
app.use(errorHandler)
app.use(notFound)

const port = process.env.PORT || 5000;

const start = async () =>{
    await connectDB(process.env.MONGO_URI)
    console.log("DB is connected!")
    server.listen(port, () => {
        console.log(` server is listening at http://localhost:${port}`)
    })
}

start()
