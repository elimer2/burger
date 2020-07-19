const connection = require("../config/connection.js");

// In the orm.js file, create the methods that will execute the necessary
// MySQL commands in the controllers.These are the methods you will need to
// use in order to retrieve and store data in your database.

// selectAll() SELECT*
// insertOne() INSERT INTO
// updateOne() UPDATE ?? SET ?? WHERE ?

//wtf is this cb
const orm = {
  all: (tableInput, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, newRowData, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    const values = [table, newRowData];

    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: (table, updateValues, condition, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    const values = [table, updateValues, condition];

    console.log(queryString);
    connection.query(queryString, values, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
