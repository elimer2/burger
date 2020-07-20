
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "sdzty55g8jjoa2x3",
  password: "mpj03gh5ippmddfl",
  database: "ca6x3f8m28xxty71",
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
