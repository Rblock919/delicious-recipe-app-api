var chalk = require('chalk');
var express = require('express');
var adminRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;

var recipes = require('../data/recipeData');

var router = function () {

    adminRouter.route('/addRecipes')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/recipeApp';
            MongoClient.connect(url, function (err, client) {

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

        });

    return adminRouter;
}

module.exports = router;