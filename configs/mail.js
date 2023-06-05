const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.protonmail.ch',
    port: 587,
    secure: false, 
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

module.exports = transporter;