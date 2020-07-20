
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "bemekadbr1zh4phn",
  password: "qh2j0nzb7jn9tp6g",
  database: "i04iefaet5gg6ou9",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
