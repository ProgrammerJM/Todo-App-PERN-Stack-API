const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  host: process.env.HOSTNAME,
  port: process.env.PORT,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASENAME,
});

module.exports = pool;
