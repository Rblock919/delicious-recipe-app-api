const chalk = require('chalk');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var passport = require('passport');

const authController = () => {

    var signUp = (req, res) => {

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

                collection.insertOne(user, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        return;
                    }

                    req.login(results.ops[0], function () {
                        res.redirect('/Recipes');
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