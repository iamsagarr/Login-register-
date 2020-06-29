// JavaScript source code
//for signing up new user and pushing user details into database.
//as this is sql database,it consists of tables where it stores data in a sequence,here users is the table to where data is pushed.
//var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
   // var today = new Date();
 // var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password, 
    
     
    }
    var email = req.body.email;
    var password=req.body.password;
    var confirmpassword=req.body.confirmpassword; 
    connection.query("SELECT COUNT(*) AS cnt FROM users WHERE email = ? " , email , function(err , data){
       if(err){
          console.log(err);
       }   
       else{
              if(data[0].cnt > 0){  
                res.json({
                  status:false,
                  message:' email already exists'
                })
              }
   
            else{
              if(password==confirmpassword){
              
                    connection.query('INSERT INTO users   SET ?',users, function (error, results, fields) {
                         if (error)
                        {
                          console.log(error);
                           res.json({
                            status:false,
                            message:' error with query'
                          })
                         }
                        else{
                            res.json({
                             status:true,
                              message:'user registered sucessfully'
                            })
                            
                         }
                   });
              }else{
                res.json({
                     status:false,
                     // data:results,
                      message:"passwords doesn't match"
                 })
			  }
            }
        }
    });
 }
