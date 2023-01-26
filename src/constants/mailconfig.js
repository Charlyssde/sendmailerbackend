const nodemailer = require("nodemailer");

const MAIL_AUTH = {
    //TODO: Cambiar esto xd
    email : string = 'benitolsca@gmail.com',
    sender : string = 'contacto@ecoticketapp.com',
    password : string = 'meomkenvnvenxxmg'
}

const MAIL_TRANSPORTER = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: MAIL_AUTH.email, // generated ethereal user
        pass: MAIL_AUTH.password, // generated ethereal password
    },
});

module.exports = {MAIL_AUTH, MAIL_TRANSPORTER};