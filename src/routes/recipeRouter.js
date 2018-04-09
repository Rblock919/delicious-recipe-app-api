var express = require('express');
var recipeRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;
var chalk = require('chalk');

// var recipeData = require('../data/recipeData');

var router = function (nav) {
    recipeRouter.route('/')
        .get(function (req, res) {

            var url = 'mongodb://localhost:27017/recipeApp';

            mongodb.connect(url, function (err, db) {

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
                });
            });
        });

    recipeRouter.route('/:id')
        .get(function (req, res) {

            var id = new objectId(req.params.id);
            var url = 'mongodb://localhost:27017/recipeApp';

            mongodb.connect(url, function (err, db) {

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
                });
            });
        });

    return recipeRouter;
}

module.exports = router;