const express = require('express');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const MessageModel = require('../models/message.model');

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

contactRouter.post('/new',
    [
        // Validate input fields
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('tel').trim().notEmpty().withMessage('Telephone is required'),
        body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
        body('msg').trim().notEmpty().withMessage('Message is required'),],
    (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Inserting one document
        MessageModel.create({
            name: req.body.name,
            tel: req.body.tel,
            email: req.body.email,
            msg: req.body.msg,
        })
            .then(() => {
                console.log('Document inserted');
                return res.status(200).send('New message posted.');
            })
            .catch((err) => {
                console.log(err.message);
                return res.status(500).send('Message could not be posted.');
            });
    }
);

module.exports = contactRouter;
