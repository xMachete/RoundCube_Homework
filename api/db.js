const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// Taking parameters from config.env for DB connection
const host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Creating connection pool
const db = mysql.createPool({
  host,
  user,
  password,
  database,
});

// Establishing connection
const connect = () => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        console.error('Error connecting to MySQL:', err);
        reject(err);
      } else {
        console.log('Connected to MySQL database.');
        resolve(connection);
      }
    });
  });
};

module.exports = {
  db,
  connect,
};