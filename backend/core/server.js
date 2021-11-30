const dotenv=require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const auth=require('./auth/authMiddleware');
const controllers=require('./controllers/index');
app.use(auth.config);
app.use(auth.middlware);
app.use('/',controllers);
var server = app.listen(process.env.SERVER_PORT,function(){
    var port = server.address().port
    console.log("app is listening at %s",port)
})
module.exports = app;