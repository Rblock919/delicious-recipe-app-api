var passport = require('passport');
var LocalStrategy = require('passport-local');
var MongoClient = require('mongodb').MongoClient;
var chalk = require('chalk');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    },
        function (username, password, done) {
            var url = 'mongodb://localhost:27017/recipeApp';

            MongoClient.connect(url, function (err, client) {

                var db = client.db('recipeApp');
                var collection = db.collection('users');
                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                collection.findOne({username: username},
                    function (err, results) {

                        if (err) {
                            console.log(chalk.red.bold.underline(err));
                            return;
                        }

                        if (results.password === password) {
                            var user = results;
                            done(null, user);
                        } else {
                            done(null, false, {message: 'Bad password'});
                        }
                    });
            });
        }));
}