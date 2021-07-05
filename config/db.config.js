'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'mynairag_suite'
});
// dbConn.connect(function(err) {
//   if (err) throw err;
//
//   console.log("Connected!");
//   // var sql = "CREATE TABLE companies (name VARCHAR(255), address VARCHAR(255))";
//   // dbConn.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Table created");
//   // });
//
//   var sql1 = "CREATE TABLE users (first_name VARCHAR(255)," +
//     "last_name VARCHAR(255)," +
//     "email VARCHAR(255)," +
//     "phone VARCHAR(255)," +
//     "organization VARCHAR(255)," +
//     "designation VARCHAR(255)," +
//     "salary VARCHAR(255)," +
//     "status VARCHAR(255)," +
//     " icon VARCHAR(255), client_type VARCHAR(255))";
//   dbConn.query(sql1, function (err, result) {
//     if (err) throw err;
//     console.log("Users Table created");
//   });
// });



module.exports = dbConn;
