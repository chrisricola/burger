// Import MySQL connection.
var connection = require("./connection.js");

const db = {
    viewAll: (table)=> connection.query(`SELECT * FROM ${table}`),
    addOne: (table,obj)=> connection.query(`INSERT INTO ${table} SET ?`, obj),
    updateRole: (table,id,burger_name)=> connection.query(`UPDATE ${table} SET burger_name = ? WHERE id=${id}`, burger_name),
    deleteOne: (table,obj)=> connection.query('DELETE FROM ${table} WHERE ')
}
module.exports = db;