const pool = require("pg").Pool;
const Pool = new pool({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "Daveking123",
  port: 5432,
});

module.exports = Pool;
