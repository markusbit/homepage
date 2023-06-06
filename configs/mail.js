const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.MAIL_USERNAME, 
        pass: process.env.MAIL_PASSWORD 
    }
});

module.exports = transporter;