//var MongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;

const recipeController = (nav, Recipe) => {

    //Handle forwarding requests to main page for users that aren't logged in
    var middleware = (req, res, next) => {
        if (!req.user) {
            res.redirect('/');
            return;
        } else {
            next();
        }
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
    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById
    }
}

module.exports = recipeController;