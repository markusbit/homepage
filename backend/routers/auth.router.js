const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.status(200).send('Authentication API'); 
})

authRouter.get('/user', (req, res) => {
    res.status(200).send('Markus Brandstetter'); 
})

authRouter.post('/login', (req, res) => {
    console.log(req.body.username); 
    console.log(req.body.password); 

    res.status(200).send('Login'); 
})

module.exports = authRouter; 