var express = require('express');
var app = express();
const { auth } = require('express-openid-connect');
const dotenv=require('dotenv');
dotenv.config();
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: 'http://localhost:3000',
  clientID: process.env.clientId,
  issuerBaseURL: process.env.issuerBaseURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
function ensureAuthentiated(req,res,next){
   if(req.oidc.isAuthenticated()){
        next();
   }
   else{
        res.redirect('/login');
   }
}
app.use(ensureAuthentiated);
app.get('/',function(req,res){
    res.send("Welcome to CMPE-272 project :Team Nibble")
})

var server = app.listen(3000,function(){
    var port = server.address().port
    console.log("app is listening at %s",port)
})
module.exports = app;