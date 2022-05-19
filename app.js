const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require("serve-static");
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'katerinushka2603@gmail.com',
        pass: 'Pillow17031997',
    },
    secure: true,
});



app.use(serveStatic(path.join(__dirname, 'dist')));

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/sendemail', (req, res) => {
    console.log(req.body)
    const from = "katerinushka2603@gmail.com";
    const text = req.body.message;
    const name = req.body.name;
    const mailData = {
        from: from, // sender address
        to: 'katerinushka2603@gmail.com', // list of receivers
        subject: 'Registration for summer camp',
        text: `Name: ${name}, message: ${text}`
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