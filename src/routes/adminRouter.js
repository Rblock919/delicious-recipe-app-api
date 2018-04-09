var chalk = require('chalk');
var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var recipes = require('../data/recipeData');

var router = function (nav) {

    adminRouter.route('/addRecipes')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/recipeApp';
            mongodb.connect(url, function (err, db) {

                var collection = db.collection('recipes');

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                }

                collection.insertMany(recipes, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        return;
                    }

                    res.send(results);
                    db.close();
                });
            });

        });

    return adminRouter;
}

module.exports = router;