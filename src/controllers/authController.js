const chalk = require('chalk');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');
// var express = require('express');
// var MongoClient = require('mongodb').MongoClient;
// var passport = require('passport');
// var uriS = require('../config/db/dbconnection');

const authController = (User) => {

    var signUp = (req, res) => {

        console.log('Username on signup call: ' + req.body.username);
        console.log('Password on singup call: ' + req.body.password);

        console.log('Body req upon registration' + JSON.stringify(req.body));

        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            isAdmin: false
        });

        newUser.save(function (err, createdUser) {
            if (err) {
                console.log(chalk.red(err));
                if (err.code === 11000) {
                    console.log('Error: Duplicate UserName')
                    res.status(409).send({ErrMessage: 'Username Already Exists'});
                    // res.send({message: 'Username Already Exists'})
                }
            } else {
                console.log('Success saving new user?');
                console.log('new user: ' + createdUser);
                const payload = {sub: createdUser._id};
                const token = jwt.encode(payload, authConfig.secret);
                const user = {
                    _id: createdUser._id,
                    username: createdUser.username,
                    password: createdUser.password,
                    isAdmin: false
                };

                res.status(201).send({token, user});
            }
        });

    };

    var signIn = (req, res) => {
        let userData = req.body;
        var query = {username: userData.username};
        var payload = {};

        User.findOne(query, '-__v', (err, user) => {

            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }

            if (!user) {
                console.log('user not found');
                res.status(401).send({ErrMessage: 'Username Not Found'});
            } else {
                bcrypt.compare(userData.password, user.password, (err, isMatch) => {

                    if (err) {
                        console.log(chalk.red('Error in bcrypt compare: ') + chalk.red.underline(err));
                    }
                    if (!isMatch) {
                        console.log('mismatched password in login attempt');
                        res.status(401).send({ErrMessage: 'Bad Password'});
                    } else {
                        payload = {sub: user._id}
                        let token = jwt.encode(payload, authConfig.secret);
                        // console.log('Outgoing token upon signIn: ' + token);
                        res.status(200).send({user: user, token: token});
                    }

                })
            }

        });
    };

    var getUserData = (req, res) => {
        var query = {};
        var userId;
        var id;

        if (!req.header('Authorization')) {
            // console.log('NO AUTH TOKEN FOUND IN NODE MIDDLEWARE');
            res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
        }

        let token = req.header('Authorization').split(' ')[1];

        if (token !== 'null') {
            console.log('token: ' + token);
            let payload = jwt.decode(token, authConfig.secret);

            if (!payload) {
                console.log('auth header invalid');
                res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
            } else {
                console.log('payload: ' + payload);
                userId = payload.sub;
                id = new objectId(userId);
                query = {_id: id};
                console.log('id from token: ' + userId);
            }

        } else {
            console.log('no auth token set');
            res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
        }

        User.findOne(query, '-__v', (err, user) => {
            if (err) {
                console.log('Error: ' + err);
                res.sendStatus(500);
            }
            if (user) {
                if (user.isAdmin) {
                    console.log('user found and is admin');
                } else {
                    console.log('user found and is not admin');
                }
                res.status(200).send({user});
            } else {
                res.status(404).send({ErrMessage: 'User Not Found'});
            }
        });
    };

    return {
        signUp,
        signIn,
        getUserData
    };

}

module.exports = authController;