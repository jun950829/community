var express = require('express');
var dbRouter = express.Router();
var db = require('./db');


//user 조회 관련
dbRouter.post('/users/inquire', function(req, res, next) {
    console.log('서버 쿼리')

    var gb = req.body.gb;

    if(gb === 'signup') {

        var signupData  = [
            req.body.user_id,
            req.body.user_password,
            req.body.user_name,
            req.body.user_nickname,
        ];  

        db.query("INSERT INTO user_data (user_id, user_password, user_name, user_nickname) VALUES (?,?,?,?);", signupData, function(err, result) {
            if(err) {
                console.log(err);
                throw err;
            } 

            res.status(200).send('success');

        });
    }


    if(gb === 'login') {

        var loginData  = {
            user_id : req.body.user_id,
            user_password : req.body.user_password,
        };  


        db.query("SELECT * FROM user_data where user_id = ?", [loginData.user_id], function(err, data) {

            if(err) {
                console.log(err);
                throw err;
            } 

            if(loginData.user_id === data[0].user_id && loginData.user_password === data[0].user_password) {
                
                res.status(200).json({
                    status: 'succes',
                    user_data : {
                        user_id : data[0].user_id,
                        user_password : data[0].user_password,
                        user_name : data[0].user_name,
                        user_nickname : data[0].user_nickname,
                    },
                });
            }
        });
    }

})




module.exports = dbRouter;