var chalk = require('chalk');
var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

var router = () => {

    var authController = require('../controllers/authController')();

    authRouter.route('/signUp')
        .post(authController.signUp);

    authRouter.route('/signIn')
        .post(passport.authenticate('local', {
            failureRedirect: '/'
        }), function (req, res) {
            console.log('User logged in?');
            if (req.user) {
                console.log('user found in req');
            }
            res.send({message: 'message'});
            // res.redirect('/');
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