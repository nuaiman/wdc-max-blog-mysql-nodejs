const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  database: "wdc_max_blog_nodejs_mysql",
  user: "root",
  password: "12345678",
});

module.exports = pool;
