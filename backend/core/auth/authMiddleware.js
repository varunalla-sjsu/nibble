const { auth } = require('express-openid-connect');
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: 'http://localhost:3000',
  clientID: process.env.clientId,
  issuerBaseURL: process.env.issuerBaseURL
};
function ensureAuthentiated(req,res,next){
    if(req.oidc.isAuthenticated()){
         next();
    }
    else{
         res.redirect('/login');
    }
 }
module.exports={
    "config":auth(config),
    "middlware":ensureAuthentiated
};