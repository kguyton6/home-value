require('dotenv').config()
const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail');


module.exports = {
      send_data:(req, res, next) => {
            const {email, name, contact, number} = req.body
            console.log(req.body)
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                  to: 'kimguyton@gmail.com',
                  from: email,
                  subject: 'New Lead from Landing Page',
                  text: `Name: ${name}
                         Phone Number: ${number}
                         Email: ${email}
                         Preferred Contact Method: ${contact}`,
                  html: '<strong>New Lead</strong>',
            };
            sgMail.send(msg)
            console.log(msg)

      }
}