require("dotenv").config();
const nodemailer = require("nodemailer");
const {PASSWORD,USERNAME} = require('./config.js')




module.exports = {
  send_data: async (req, res, next) => {
    const {email, name, number, address, zipcode, contact} = req.body.message
    var transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: USERNAME,
        pass: PASSWORD,
      }

    });
    const messageOptions = {
      to: USERNAME,
      from: email,
      subject: "New Lead from Landing Page",
      html: `<strong>
                  New Lead <br/>
                  Name: ${name} <br/>
                  Phone Number: ${number} <br/>
                  Email: ${email} <br/>
                  Address: ${address} <br/>
                  Zipcode: ${zipcode} <br/>
                  Preferred Contact Method: ${contact} <br/>
                  </strong>`
    };
    transporter.sendMail(messageOptions, (err, info) => {
      if(err)
      console.log(err)
    else
    console.log(info)
      res.status(200).send(info);
    });

  }

};
