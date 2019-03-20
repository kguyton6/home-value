require("dotenv").config();
const nodemailer = require("nodemailer");
const {PASSWORD, EMAIL, API_KEY} = require('./config.js')




module.exports = {
  send_data: async (req, res, next) => {
    const {email, name, number, address, zipcode, contact} = req.body.message
    var transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      }

    });
    const messageOptions = {
      to: EMAIL,
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
    next()
  },
  send_email: (req, res) => {
    const {email, name, number, address, zipcode, contact} = req.body.message
    var mailgun = new Mailgun({apiKey: API_KEY, domain: 'https://api.mailgun.net/v3/custom-landing-pages.com'});
    var data = {
      from: email,
      to: EMAIL,
    //Subject and text data  
      subject: 'New Lead From Landing Page',
      html: `<strong>
      New Lead <br/>
      Name: ${name} <br/>
      Phone Number: ${number} <br/>
      Email: ${email} <br/>
      Address: ${address} <br/>
      Zipcode: ${zipcode} <br/>
      Preferred Contact Method: ${contact} <br/>
      </strong>`
    }
    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.render('error', { error : err});
            console.log("got an error: ", err);
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.render('submitted', { email : req.params.mail });
            console.log(body);
        }
    });
  }
};
