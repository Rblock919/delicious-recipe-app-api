var chalk = require('chalk');
var express = require('express');
var authRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var passport = require('passport');

var router = () => {
    authRouter.route('/signUp')
        .post(function (req, res) {

            var url = 'mongodb://localhost:27017/recipeApp';
            console.log(req.body);

            MongoClient.connect(url, function (err, client) {
                var db = client.db('recipeApp');
                var collection = db.collection('users');
                var user = {
                    username: req.body.userName,
                    password: req.body.password
                };

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                collection.insert(user, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        return;
                    }

                    req.login(results.ops[0], function () {
                        res.redirect('/auth/profile');
                    });
                });
            });
        });

    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), function (req, res) {
            res.redirect('/auth/profile');
        });

    authRouter.route('/profile')
        .all(function (req, res, next) {
            if (!req.user) {
                res.redirect('/');
            }
            next();
        })
        .get(function (req, res) {
            res.json(req.user);
        });

    return authRouter;
};

module.exports = router;