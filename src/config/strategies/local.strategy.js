var passport = require('passport');
var LocalStrategy = require('passport-local');
var MongoClient = require('mongodb').MongoClient;
var chalk = require('chalk');
var dbRemoteUri = require('../db/dbconnection');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
        function (username, password, done) {
            var url = 'mongodb://localhost:27017/recipeApp';

            MongoClient.connect(dbRemoteUri.remote, {useNewUrlParser: true}, function (err, client) {

                var db = client.db('recipeApp');
                var collection = db.collection('users');

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                console.log('In local strat file');

                collection.findOne({username: username},
                    function (err, results) {

                        if (err) {
                            console.log(chalk.red.bold.underline(err));
                            return;
                        }

                        if (results.password === password) {
                            console.log('User Found');
                            var user = results;
                            done(null, user);
                        } else {
                            done(null, false, {message: 'Bad password'});
                        }
                    });

            });

        }));
}