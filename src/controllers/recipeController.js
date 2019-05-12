//var MongoClient = require('mongodb').MongoClient;
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');

const recipeController = (nav, Recipe) => {

    //Handle forwarding requests to main page for users that aren't logged in
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

    var getIndex = (req, res) => {
        var query = {};

        Recipe.find(query, (err, recipes) => {
            if (err) {
                console.log(chalk.red(err));
            }
            //res.status(200);
            //console.log('Recipes object: ' + recipes);
            res.status(200).send(recipes);
        });
    };

    var getById = (req, res) => {
        var id = new objectId(req.params.id);
        var query = {_id: id};

        Recipe.findOne(query, (err, recipe) => {
            if (err) {
                console.log(err);
            }
            res.status(200).send(recipe);
        });
    };

    var addRecipe = (req, res) => {
        var recipeData = assembleRecipeData(req);
        var recipeToSave = new Recipe({
            title: recipeData.title,
            producer: recipeData.producer,
            ingredients: recipeData.ingredients,
            numSteps: recipeData.numSteps,
            steps: recipeData.steps,
            nutritionValues: recipeData.nutritionValues,
            imgDir: recipeData.imgDir
        });

        recipeToSave.save(function (err, createdRecipe) {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            } else {
                console.log(chalk.green('successfully saved new recipe'));
                // res.sendStatus(201);
                res.status(201).send({id: createdRecipe._id});
            }
        });

    }

    var updateRecipe = (req, res) => {
        var id = new objectId(req.body._id);
        var query = {_id: id};
        var recipeData = assembleRecipeData(req);

        // console.log('in update recipe...');
        // console.log(JSON.stringify(req.body));

        Recipe.findOneAndUpdate(query, recipeData, function (err, doc) {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }
            console.log('doc: ' + doc);
        })
        res.sendStatus(200);
    }

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById,
        addRecipe: addRecipe,
        updateRecipe: updateRecipe
    }
}

module.exports = recipeController;

function assembleRecipeData(req) {

    var recipeData = {
        title: req.body.title,
        producer: req.body.producer,
        ingredients: [],
        numSteps: req.body.numSteps,
        steps: req.body.steps,
        nutritionValues: req.body.nutrition,
        imgDir: req.body.imgDir
    }

    req.body.ingredients.forEach(element => {
        recipeData.ingredients.push(element.name + ' | ' + element.amount);
    });

    // console.log(chalk.green('in assemble: ' + JSON.stringify(recipeData)));

    return recipeData;

}