const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  port: process.env.SERVER_PORT
};