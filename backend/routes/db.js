// var express = require('express');
// var router = express.Router();

var mysql = require('mysql');

var db = mysql.createConnection({
    user : 'root',
    host : 'localhost',
    database : 'community',
    password: 'cjstmdwns',
    port : 3306
})

module.exports = db;