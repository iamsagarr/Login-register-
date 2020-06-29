// JavaScript source code
//this for creating a connection for our mysql database
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     :'localhost',
  user     : 'root',                       // your mysql username here
  password : 'password',                  //your mysql password here
  database : 'userdetails'                // database name with which you want to create connection
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 
