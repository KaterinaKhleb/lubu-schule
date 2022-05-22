const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static");
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
    },
    secure: true,
});

app.use(serveStatic(path.join(__dirname, 'dist')));

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/sendemail', (req, res) => {
    const from = EMAIL;
    const text = req.body.message;
    const name = req.body.fromName;
    const phone = req.body.fromPhone;
    const mailData = {
        from: from,
        to: EMAIL,
        subject: 'Registration for summer camp',
        text: `NEW SOMMER CAMP REGISTRATION REQUEST. Name: ${name}, Phoone: ${phone}, Message: ${text}`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
});

app.use('/*', express.static(path.join(__dirname, 'dist/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on port ${port}`));