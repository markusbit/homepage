const mongoose = require('mongoose'); 

// Creating Structure of the collection
const messageShema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
    ,
    tel: {
        type: String,
        require: true
    }
    ,
    email: {
        type: String,
        require: true
    }, 
    msg: {
        type: String,
        require: true
    }
}, {
    collection: 'messages'
})

// Creating collection
const MessageModel = mongoose.model("Messages", messageShema); 

module.exports = MessageModel; 