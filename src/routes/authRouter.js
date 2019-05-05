var express = require('express');
var authRouter = express.Router();
var passport = require('passport');

var router = (User) => {

    var authController = require('../controllers/authController')(User);

    authRouter.route('/signUp')
        .post(authController.signUp);

    authRouter.route('/signIn')
        .post(authController.signIn);

    // authRouter.route('/getAdminStatus')
        // .post(authController.getAdminStatus);

    // .post(passport.authenticate('local', {
    //      failureRedirect: '/'
    // }), function (req, res) {
    //      console.log('User logged in?');
    //      if (req.user) {
    //          console.log('user found in req');
    //      }
    //      res.send({message: 'User Logged In'});
    // //   res.redirect('/');
    // });

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