const mongoose = require('mongoose'); 

// Creating Structure of the collection
const contactShema = new mongoose.Schema({
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
    }
}, {
    collection: 'contacts'
})

// Creating collection
const ContactModel = mongoose.model("Contact", contactShema); 

module.exports = ContactModel; 