// Set up MySQL connection.
var mysql = require("mysql");
const util = require('util')

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Music2020!",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query)

// Export connection for our ORM to use.
module.exports = connection;