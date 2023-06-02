const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./configs/database"); 
const path = require("path"); 
connect(); 

const transporter = require('./configs/mail'); 

const mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: 'markusbrandstetter2006@gmail.com',
  subject: 'New Message (markusb.ddns.net)',
  text: `Test`
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.error('Error:', error);
  } else {
      console.log('Email sent:', info.response);
  }
});

const authRouter = require('./routers/auth.router'); 
const contactRouter = require('./routers/contact.router'); 

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); 

app.use(express.static(path.join(__dirname, 'frontend/build')));

// API Routes
app.use('/api/auth', authRouter); 
app.use('/api/contact', contactRouter); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
