// var express = require('express');
// var router = express.Router();

var {Client} = require('pg');

var db = new Client({
    user : 'cheonseungjun',
    host : 'localhost',
    database : 'postgres',
    password: 1234,
    port : 5432
})

module.exports = db;