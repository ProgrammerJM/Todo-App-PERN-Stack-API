const Pool = require("pg").Pool;
// require("dotenv").config();

// const pool = new Pool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

pool.connect((err, client, release) => {
  if (err) throw err;
  console.log("Connet to PostgresSQL successfully");
});

module.exports = pool;
