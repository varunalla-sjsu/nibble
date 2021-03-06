const dotenv=require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors=require('cors');
const auth=require('./auth/authMiddleware');
const apiControllers=require('./controllers/index');
/**
 * Authentication Middleware
 */
app.use(auth.config);
app.use(auth.middlware);
/**
 * cors 
 * body parsing configuration 
 * */
 app.use(express.static('public'));

app.use(cors({
  origin:'*'
}));
app.use(express.json());
app.use(express.urlencoded());

/**
 * Controller injection
 *  */ 
app.use('/api',apiControllers);
app.get('*', function(req, res){
  res.sendFile("index.html", {root: "public"});
});
var server = app.listen(process.env.SERVER_PORT,function(){
    var port = server.address().port
    console.log("app is listening at %s",port)
})
module.exports = app;