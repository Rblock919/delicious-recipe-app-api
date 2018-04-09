var express = require('express');
var authRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;

var router = () => {
    authRouter.route('/signUp')
        .post(function (req, res) {
            console.log(req.body);
        });

    return authRouter;
};

module.exports = router;