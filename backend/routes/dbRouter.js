var express = require('express');
var dbRouter = express.Router();
var db = require('./db');



dbRouter.post('/users/signup', function(req, res, next) {
    console.log('서버 쿼리')

    var user  = [
        req.body.user_id,
        req.body.user_password,
        req.body.user_name,
        req.body.user_nickname,
    ];

    db.query("INSERT INTO user_data (user_id, user_password, user_name, user_nickname) VALUES ($1, $2, $3, $4);", user, function(err, result) {
        if(err) {
            console.log(err);
            throw err;
        } 

        res.status(200).send('success');

    });

})




module.exports = dbRouter;