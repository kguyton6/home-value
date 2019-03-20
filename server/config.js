const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  USERNAME: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  port: process.env.SERVER_PORT
};
