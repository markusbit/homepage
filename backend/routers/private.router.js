const express = require('express');
const privateRouter = express.Router();

privateRouter.get('/', (req, res) => {
    res.status(200).send('Authentication API'); 
})

privateRouter.get('/user', (req, res) => {
    res.status(200).send('Markus Brandstetter'); 
})

module.exports = privateRouter; 