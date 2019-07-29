const express = require('express');
const authRouter = express.Router();
const passport = require('passport');

const router = (User, login) => {

    const authController = require('../controllers/authController')(User, login);

    authRouter.route('/signUp')
        .post(authController.signUp);

    authRouter.route('/signIn')
        .post(authController.signIn);

    authRouter.route('/getUserData')
        .get(authController.getUserData);

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

    // authRouter.route('/profile')
    //     .all(function (req, res, next) {
    //         if (!req.user) {
    //             res.redirect('/');
    //         }
    //         next();
    //     })
    //     .get(function (req, res) {
    //         res.json(req.user);
    //     });

    return authRouter;
};

module.exports = router;
