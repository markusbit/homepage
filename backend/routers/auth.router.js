const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.status(200).send('Authentication API'); 
})

authRouter.get('/user', (req, res) => {
    res.status(200).send('Markus Brandstetter'); 
})

module.exports = authRouter; 