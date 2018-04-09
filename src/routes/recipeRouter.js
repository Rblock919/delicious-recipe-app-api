var express = require('express');
var recipeRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var chalk = require('chalk');

// var recipeData = require('../data/recipeData');

var router = function (nav) {
    recipeRouter.route('/')
        .get(function (req, res) {

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
            });
        });

    recipeRouter.route('/:id')
        .get(function (req, res) {

            var id = new objectId(req.params.id);
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
            });
        });

    return recipeRouter;
}

module.exports = router;