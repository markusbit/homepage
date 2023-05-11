const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./configs/database"); 
connect(); 

const authRouter = require('./routers/auth.router'); 
const contactRouter = require('./routers/contact.router'); 
const privateRouter = require('./routers/private.router'); 

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); 

app.get('/', (req, res) => {
  res.status(200).send('Homepage API'); 
})

app.use('/api/auth', authRouter); 
app.use('/api/contact', contactRouter); 
app.use('/api/private', privateRouter)

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
