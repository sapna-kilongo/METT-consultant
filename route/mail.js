const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY || 'db33b45d274b3c68cdcad7561381508c-90ac0eb7-898b10a5', // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || 'sandbox730697126d7e4204b090871b2cda4d9c.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
//email, name, phone, message, function (err, data)

const sendMail = (email, name, phone, message, cb) => {
    const texts = "my number is " + phone + " " + message
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: "mettconsultant@outlook.com", // TODO: the receiver email has to be authorized for the free tier
        subject: name,
        text: texts
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail