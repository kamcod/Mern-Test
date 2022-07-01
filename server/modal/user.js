const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please provide your name"],
        minLength: 3,
        maxLength: 50,
    },
    email:{
        type: String,
        required: [true, "Please provide your name"],
        minLength: 3,
        maxLength: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide password"],
        minLength: 8,
        unique: true,
    }
})

module.exports = mongoose.model('Users', userSchema)