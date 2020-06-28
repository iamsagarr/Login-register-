// JavaScript source code
var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    var today = new Date();
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