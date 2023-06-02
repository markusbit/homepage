const express = require('express');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const MessageModel = require('../models/message.model');
const ContactModel = require('../models/contact.model');
const authenticate = require('../auth/authenticate');
const transporter = require('../configs/mail.js');

const contactRouter = express.Router();

// Apply rate limiting middleware
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 30, // Maximum 5 requests per minute
});
contactRouter.use('/new', limiter);

contactRouter.get('/', (req, res) => {
    res.status(200).send('Contact API');
});

contactRouter.get('/messages', authenticate, (req, res) => {
    MessageModel.find().then((docs) => {
        return res.status(200).json(docs);
    }).catch((error) => {
        return res.status(400).send(error);
    })
})

contactRouter.get('/contacts', authenticate, (req, res) => {
    ContactModel.find().then((docs) => {
        return res.status(200).json(docs);
    }).catch((error) => {
        return res.status(400).send(error);
    })
})

contactRouter.delete('/message/delete', authenticate, async (req, res) => {
    try {
        const messageId = req.query.id;
        await MessageModel.findOneAndDelete({ _id: messageId });
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
});

contactRouter.post('/new',
    [
        // Validate input fields
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('tel').trim().notEmpty().withMessage('Telephone is required'),
        body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
        body('msg').trim().notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await MessageModel.create({
                name: req.body.name,
                tel: req.body.tel,
                email: req.body.email,
                msg: req.body.msg,
            });

            const mailOptions = {
                from: process.env.MAIL_USERNAME,
                to: 'markusbrandstetter2006@gmail.com',
                subject: 'New Message (markusb.ddns.net)',
                text: `Message:\nFrom: ${req.body.name}\nTel: ${req.body.tel}\nEmail: ${req.body.email}\n\n${req.body.msg}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });

            const existingContact = await ContactModel.findOne({
                name: req.body.name,
                tel: req.body.tel,
                email: req.body.email
            });

            if (existingContact) {
                console.log("Contact already exists. ")
            } else {
                ContactModel.create({
                    name: req.body.name,
                    tel: req.body.tel,
                    email: req.body.email
                }).then((ans) => {
                    console.log("New Contact inserted");
                }).catch((err) => {
                    console.log(err.message);
                })
            }

            console.log('Document inserted');
            return res.status(200).send('New message posted.');
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Message could not be posted.');
        }
    }
);


module.exports = contactRouter;
