require("dotenv").config();
const nodemailer = require("nodemailer");
const {USER, PASS} = process.env


module.exports = {
  send_data: (req, res, next) => {
    const { email, name, contact, number, address, zipcode } = req.body;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER,
        pass: PASS
      }
    });
    const messageOptions = {
      to: "kimguyton@gmail.com",
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
      res.status(200).send(info);
    });

  }

};
