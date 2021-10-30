var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Welcome to CMPE272 project-Team Nibble")
})

var server = app.listen(3000,function(){
    var port = server.address().port
    console.log("app is listening at %s",port)
})