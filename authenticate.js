// JavaScript source code
//this piece of code is for authenticating  user login details while a user try to login with username and password.
var bcrypt = require('bcrypt')
 
var connection = require('./config');
module.exports.authenticate=function(req,res){
    var username=req.body.username;
    var password=req.body.password;
   
   
   connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
        if(results.length >0){
            //bcrypt.compare(password, results.password, function(err, res) {
                if(password==results[0].password){
                    res.json({
                      status:true,                  
                      message:"successfully login"
                    });
                }else{                    
                    res.json({
                        status:false,
                        message:"username and password doesn't match"
                    })
                }
           // });
         }
        else{
              res.json({
                status:false,
                message:"username doesn't exist signup to continue"
              })
			}
        
      }
   });          
}
