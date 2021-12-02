
'use strict';

const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
//const config    = require(__dirname + '/../config/config.json')[env];
const config ={
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
}
const connection = new Sequelize(config);

const definitions = require('./definitions'); 
const models = {};
for(const name in definitions) {
     models[name] = connection.define(definitions[name].tablename, definitions[name].schema,definitions[name].config);
     if(definitions[name].hasOwnProperty('isSync')){
       models[name].sync({force:true});
     }
     console.log(name);
}

module.exports = {
  connection, models
};
