// Importing mongoose module
const mongoose = require("mongoose")
const MessageModel = require('../models/message.model');

function connect() {
    // Connecting to database
    mongoose.connect(process.env.MONGO_URI).then((ans) => {
        console.log("Database connected successfully. ");
    }).catch((err) => {
        console.log("Error in the connection. ");
    })
}

// Inserting one document
/*
MessageModel.create({
    name: "Markus",
    tel: "+436766281958",
    email: "markusbrandstetter2006@gmail.com",
    msg: "New Message",
}).then((ans) => {
    console.log("Document inserted")
}).catch((err) => {
    console.log(err.message);
})*/

// Find all documents
MessageModel.find({ msg: 'New Message'})
    .then((docs) => {
        console.log("Found the following documents:");
        console.log(docs);
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = connect; 