const express = require('express');
const authRouter = express.Router();

const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

authRouter.get('/', (req, res) => {
    res.status(200).send('Authentication API');
})

authRouter.get('/user', (req, res) => {
    res.status(200).send('Markus Brandstetter');
})

authRouter.post('/login', (req, res) => {
    UserModel.findOne({
        'username': req.body.username,
    }).then(async (user) => {
        if (user) {
            console.log(user.username);
            console.log(user.password);

            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                return res.status(200).json({ 'token': generateAccessToken({user: user}) });
            } else {
                return res.status(401).send('Invalid Password');
            }
        } else {
            return res.status(401).send('Invalid Username');
        }
    }).catch((error) => {
        return res.status(400).send(error);
    })
})

authRouter.post("/register", async (req, res) => {
        UserModel.findOne({username: req.body.username}).then((user) => {
            if (user) {
                res.status(400).send('User already exists.'); 
                return; 
            } 
        })

        const encryptedPassword = await bcrypt.hash(req.body.password, 10); 
        const user = {
            username: req.body.username, 
            password: encryptedPassword
        }
        await UserModel.create(user);
        return res.send(generateAccessToken(user)); 
    }
)

module.exports = authRouter; 