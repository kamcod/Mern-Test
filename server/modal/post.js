const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide any title"],
        minLength: 3,
        maxLength: 50,
    },
    description:{
        type: String,
        required: [true, "Please provide description"],
        minLength: [8, "Please enter minimum 8 characters"],
    },
    likes:{
        type: Number
    },
    comments:{
        type: Array
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      }
      
}, {timestamps: true});


postSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        next( new badRequestError("This account already exists"));
    } 
    else {
        next( new badRequestError(error.name));
    }
  });


module.exports = mongoose.model('Post', postSchema)