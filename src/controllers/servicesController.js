const chalk = require('chalk');
var MongoClient = require('mongodb').MongoClient;

const servicesController = () => {

    var addRecipe = (req, res) => {

        var userSteps = assembleSteps(req);
        var recipedata = assembleRecipeData(req, userSteps);

        var url = 'mongodb://localhost:27017/recipeApp';

        MongoClient.connect(url, function (err, client) {
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
        })
    };

    return {
        addRecipe: addRecipe
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

    var userCalories = 300;
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
                calories: userCalories,
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
