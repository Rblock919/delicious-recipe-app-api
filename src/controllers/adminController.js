const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');
var MongoClient = require('mongodb').MongoClient;
var uriS = require('../config/db/dbconnection');
var recipes = require('../data/recipeData');
var newRecipes = require('../data/newRecipeData');

const adminController = (User) => {

    // TO-DO: GO EXTRA STEP AND MAKE SURE USER IS ALSO ADMIN IN THIS MIDDLEWARE
    // eslint-disable-next-line consistent-return
    var middleware = (req, res, next) => {

        if (!req.header('Authorization')) {
            // console.log('NO AUTH TOKEN FOUND IN NODE MIDDLEWARE');
            return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
        }

        let token = req.header('Authorization').split(' ')[1];

        if (token !== 'null') {

            // console.log('TOKEN FOUND IN HEADER');
            let payload = jwt.decode(token, authConfig.secret);
            // console.log('payload: ' + JSON.stringify(payload));

            if (!payload) {
                console.log('auth header invalid');
                return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
            } else {
                // console.log('setting userId in req');
                req.userId = payload.sub;
                next();
            }

        } else {
            console.log('NO TOKEN FOUND IN MW');
            res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
        }

        // console.log('TOKEN IN RECIPE CONT MIDDLEWARE: ' + token);

        // if (!req.user) {
            // console.log('User not logged in');
            // res.redirect('/');
            // return;
        // } else {
            // next();
        // }
    }

    var addRecipes = (req, res) => {

        MongoClient.connect(uriS.remote, {useNewUrlParser: true}, function (err, client) {

                const db = client.db('recipeApp');
                var collection = db.collection('recipes');

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    res.sendStatus(500);
                }

                collection.insertMany(recipes, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        res.sendStatus(500);
                    } else {
                        res.send(results);
                    }

                    client.close();
                });
            });
    }

    var addNewRecipes = (req, res) => {
        MongoClient.connect(uriS.remote, {useNewUrlParser: true}, function (err, client) {

            const db = client.db('recipeApp');
            var collection = db.collection('recipes');

            if (err) {
                console.log(chalk.red.bold.underline(err));
                res.sendStatus(500);
            }

            collection.insertMany(newRecipes, function (err, results) {

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    res.sendStatus(500);
                } else {
                    res.send(results);
                }

                client.close();
            });
        });
    }

    return {
        middleware: middleware,
        addRecipes: addRecipes,
        addNewRecipes: addNewRecipes
    }
}

module.exports = adminController;

