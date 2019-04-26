const chalk = require('chalk');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var passport = require('passport');
var uriS = require('../config/db/dbconnection');

const authController = () => {

    var signUp = (req, res) => {

            var url = 'mongodb://localhost:27017/recipeApp';
            console.log('Username on signup call: ' + req.body.username);
            console.log('Password on singup call: ' + req.body.password);

            //res.sendStatus(201);

            MongoClient.connect(uriS.remote, {useNewUrlParser: true}, function (err, client) {
                var db = client.db('recipeApp');
                var collection = db.collection('users');
                var user = {
                    username: req.body.username,
                    password: req.body.password
                };

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                collection.insertOne(user, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        return;
                    }

                    req.login(results.ops[0], function () {
                        res.status(201).send(results.ops[0]);
                    });

                    client.close();
                });
            })
        };

    return {
        signUp: signUp
    }

}

module.exports = authController;