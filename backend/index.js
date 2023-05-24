const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./configs/database"); 
const path = require("path"); 
connect(); 

const authRouter = require('./routers/auth.router'); 
const contactRouter = require('./routers/contact.router'); 

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); 

app.use(express.static(path.join(__dirname, 'build')));

// API Routes
app.use('/api/auth', authRouter); 
app.use('/api/contact', contactRouter); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
