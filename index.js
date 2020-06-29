// JavaScript source code
//this is main source code for this Api,here i imported all the router paths,routers to handle our get and post requests.
//need to install node modules express,bodyParser.
var express=require("express");
var bodyParser=require('body-parser'); 
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./authenticate');
var registerController=require('./signup');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
/* route to handle login and registration */
//app.post('/api/register',registerController.register);
//app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/signup', registerController.register);
app.post('/authenticate', authenticateController.authenticate);
app.listen(8012,function(err){
    if(err) throw err;
    else console.log('server listening on port 8012');
});
