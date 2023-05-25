const mongoose = require('mongoose'); 

// Creating Structure of the collection
const userShema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }
    ,
    password: {
        type: String,
        require: true
    }
}, {
    collection: 'users'
})

// Creating collection
const UserModel = mongoose.model("Users", userShema); 

module.exports = UserModel; 