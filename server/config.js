const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  port: process.env.SERVER_PORT,
  API_KEY: process.env.MAILGUN_API_KEY,
  TWILIO_NUMBER: process.env.TWILIO_NUMBER,
  MYNUMBER: process.env.MYNUMBER,
  AUTH_TOKEN: process.env.AUTH_TOKEN,
  ACCOUNT_SID: process.env.ACCOUNT_SID
};
