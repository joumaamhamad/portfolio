const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://127.0.0.1/portfolio').then
( 
    () => console.log("connected to db!")

).catch((err) => {

    console.log(err.message);
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'portfolio313@outlook.com',
        pass: 'port123port', 
    },
});

app.post('/send-email', (req, res) => {
    const { email , message } = req.body;



    const mailOptions = {
        from: 'portfolio313@outlook.com',
        to: 'portfolio647@gmail.com',
        text: `Im ${email} , my message is: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});


app.use((err , req , res , next) => {
    res.status(500).send({message: err.message});
})

app.listen(port, () => {

    console.log(`Server is running on port 5000`);
});

