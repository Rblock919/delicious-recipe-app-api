const chalk = require('chalk');
var MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;

const servicesController = (nav, Recipe) => {

    //Handle forwarding requests to main page for users that aren't logged in
    var middleware = (req, res, next) => {
        if (!req.user) {
            res.redirect('/');
            return;
        } else {
            next();
        }
    }

    var addRecipe = (req, res) => {

        var userSteps = assembleSteps(req);
        var recipedata = assembleRecipeData(req, userSteps);

        var url = 'mongodb://localhost:27017/recipeApp';

        MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
            var db = client.db('recipeApp');
            var collection = db.collection('recipes');

            if (err) {
                console.log(chalk.red.bold.underline(err));
                return;
            }

            collection.insertOne(recipedata, function (err, results) {

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    return;
                } else {
                    res.redirect('/Recipes');
                }

                client.close();

            });
        });
        //res.redirect('/Recipes');
    };

    var getEditList = (req, res) => {

        var query = {};

        Recipe.find(query, (err, recipes) => {
            if (err) {
                console.log(chalk.red(err));
            }
            res.render('editRecipeListView', {
                title: 'Choose Recipe to Edit',
                nav,
                recipes
            });
        });

    }

    var getEditPage = (req, res) => {

        var id = new objectId(req.params.id);
        var query = {_id: id};

        Recipe.findOne(query, (err, recipe) => {
            if (err) {
                console.log(err);
            }
            res.render('editRecipeView', {
                title: 'Edit Recipe',
                nav,
                recipe
            });
        });

    }

    var editRecipe = (req, res) => {
        res.send('Back end MongoDB editing coming soon!');
    }

    return {
        editRecipe: editRecipe,
        middleware: middleware,
        addRecipe: addRecipe,
        getEditList: getEditList,
        getEditPage: getEditPage
    };

};

module.exports = servicesController;

function assembleSteps(req) {

    var userSteps = [
            {
                name: req.body.step1name,
                body: req.body.step1details
            },
            {
                name: req.body.step2name,
                body: req.body.step2details
            },
            {
                name: req.body.step3name,
                body: req.body.step3details
            },
            {
                name: req.body.step4name,
                body: req.body.step4details
            },
            {
                name: req.body.step5name,
                body: req.body.step5details
            },
            {
                name: req.body.step6name,
                body: req.body.step6details
            }
        ];

    return userSteps;
}

function assembleRecipeData(req, userSteps) {

    var correctUserCalories = (req.body.fats * 9) + (req.body.carbs * 4) + (req.body.protein * 4);

    var recipedata = {
            title: req.body.recipeTitle,
            producer: req.body.producer,
            ingredients: [
            'Lime | 1',
            'Radishes | 3',
            'Scallions | 2',
            'Shrimp | 10oz',
            'Red Cabbage | 4oz',
            'Cornstarch | 2tbsp',
            'Chipotle Powder | 1tbsp',
            'Sour Cream | 4tbsp',
            'Flour Tortillas | 6'
        ],
            numSteps: 6,
            steps: userSteps,
            nutritionValues: {
                calories: correctUserCalories,
                fat: req.body.fats,
                saturatedFat: req.body.satFats,
                carbohydrate: req.body.carbs,
                sugar: req.body.sugar,
                fiber: req.body.fiber,
                protein: req.body.protein,
                cholesterol: req.body.chol,
                sodium: req.body.sodium
            },
            imgDir: req.body.url
        };

    return recipedata;
}
