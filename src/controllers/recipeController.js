//var MongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;

const recipeController = (nav, Recipe) => {

    //Handle forwarding requests to main page for users that aren't logged in
    var middleware = (req, res, next) => {
        if (!req.user) {
            res.redirect('/');
        }
        next();
    }

    var getIndex = (req, res) => {
        var query = {};

        Recipe.find(query, (err, recipes) => {
            if (err) {
                console.log(chalk.red(err));
            }
            res.render('recipeListView', {
                title: 'Recipes',
                nav,
                recipes
            });
        });

        /*
        var url = 'mongodb://localhost:27017/recipeApp';
        MongoClient.connect(url, function (err, client) {

            const db = client.db('recipeApp');
            var collection = db.collection('recipes');

            if (err) {
                console.log(chalk.red.bold.underline(err));
                return;
            }

            collection.find({}).toArray(function (err, results) {

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                res.render('recipeListView', {
                    title: 'Recipes',
                    nav: nav,
                    recipes: results
                });
                client.close();
            });
        }); */

    };

    var getById = (req, res) => {
        var id = new objectId(req.params.id);
        var query = {_id: id};

        Recipe.findOne(query, (err, recipe) => {
            if (err) {
                console.log(err);
            }
            res.render('recipeView', {
                title: 'Recipes',
                nav,
                recipe
            });
        });
        /*
        var url = 'mongodb://localhost:27017/recipeApp';

        MongoClient.connect(url, function (err, client) {

            var db = client.db('recipeApp');
            var collection = db.collection('recipes');

            if (err) {
                console.log(chalk.red.bold.underline(err));
                return;
            }

            collection.findOne({_id: id}, function (err, results) {

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                res.render('recipeView', {
                    title: 'Recipes',
                    nav: nav,
                    recipe: results
                });
                client.close();
            });
        }); */
    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById
    }
}

module.exports = recipeController;