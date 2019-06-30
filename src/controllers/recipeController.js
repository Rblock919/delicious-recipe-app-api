//var MongoClient = require('mongodb').MongoClient;
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt-nodejs');
const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');

const recipeController = (Recipe, newRecipe) => {

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
    };

    var getIndex = (req, res) => {
        var query = {};

        Recipe.find(query, (err, recipes) => {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
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
                res.sendStatus(500);
            }
            res.status(200).send(recipe);
        });
    };

    var addRecipe = async (req, res) => {
        
        var id = new objectId(req.body.approvalId);
        var query = {_id: id};
        // var returnId;

        var recipeToSave = new Recipe({
            title: req.body.recipe.title,
            producer: req.body.recipe.producer,
            ingredients: [],
            preCook: [],
            numSteps: req.body.recipe.numSteps,
            steps: req.body.recipe.steps,
            nutritionValues: req.body.recipe.nutritionValues,
            favoriters: [],
            raters: {},
            imgDir: req.body.recipe.imgDir
        });

        req.body.recipe.ingredients.forEach(element => {
            recipeToSave.ingredients.push(element.name + ' | ' + element.amount);
        });
        if (req.body.recipe.producer === 'Hello Fresh' || req.body.recipe.producer === 'Home Chef') {
            req.body.recipe.preCook.forEach(element => {
                recipeToSave.preCook.push(element.body);
            });
        };

        await newRecipe.deleteOne(query, function (err) {
            if (err) {
                console.log(chalk.red('ERROR DELETING RECIPE FROM APPROVAL LIST: \n' + err));
            } else {
                // res.status(201).send({id: returnId});
            }
        });

        await recipeToSave.save(function (err, createdRecipe) {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            } else {
                console.log(chalk.green('successfully saved new recipe'));
                // res.sendStatus(201);
                console.log('ReturnId: ' + createdRecipe._id);
                res.status(201).send({id: createdRecipe._id});
            }
        });

    };

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
            } else {
                console.log(chalk.green('recipe successfully updated'));
                res.sendStatus(200);
            }
            // console.log('doc: ' + doc);
        });
    };

    var deleteRecipe = (req, res) => {
        var id = new objectId(req.params.id);
        var query = {_id: id};

        Recipe.deleteOne(query, function (err) {
            if (err) {
                console.log(chalk.red('ERROR: ' + err));
            } else {
                res.sendStatus(200);
            }
        });
    }

    var favorite = (req, res) => {
        var prevFavoriters = req.body.recipe.favoriters;
        var id = new objectId(req.body.recipe._id);
        var query = {_id: id};
        var updatedFavoriters;
        var addingFav = req.body.favoriting;

        if (addingFav) { // user is favoriting recipe
            prevFavoriters.push(req.userId);
        } else { // user is unfavoriting recipe
            prevFavoriters = prevFavoriters.filter(uId => uId !== '' + req.userId)
        }

        updatedFavoriters = {favoriters: prevFavoriters};
        Recipe.findOneAndUpdate(query, updatedFavoriters, function (err, doc) {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }
            // console.log('doc: ' + JSON.stringify(doc));
            res.sendStatus(200);
        });

    };

    var rateRecipe = (req, res) => {
        var recipeId = new objectId(req.body._id);
        var query = {_id: recipeId};

        var newRaters = req.body.raters;
        var updatedRaters = {raters: newRaters};

        Recipe.findOneAndUpdate(query, updatedRaters, function (err, doc) {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }
            // console.log('doc: ' + doc);
            res.sendStatus(200);
        });

        // console.log('recipeId: ' + recipeId);
        // console.log('req.body: ' + JSON.stringify(req.body));
        //res.sendStatus(200);
    };

    var submitForApproval = (req, res) => {

        var recipeData = assembleRecipeData(req);
        var recipeToSave = new newRecipe({
            title: recipeData.title,
            producer: recipeData.producer,
            ingredients: recipeData.ingredients,
            preCook: recipeData.preCook,
            numSteps: recipeData.numSteps,
            steps: recipeData.steps,
            nutritionValues: recipeData.nutritionValues,
            favoriters: [],
            raters: {},
            imgDir: recipeData.imgDir
        });

        console.log('recipeToSave data in addRecipe: ' + JSON.stringify(recipeToSave));
        // res.sendStatus(201);
        // return;

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

    };

    return {
        middleware: middleware,
        getIndex: getIndex,
        getById: getById,
        addRecipe: addRecipe,
        updateRecipe: updateRecipe,
        deleteRecipe: deleteRecipe,
        submitForApproval: submitForApproval,
        rateRecipe: rateRecipe,
        favorite: favorite
    };
}

module.exports = recipeController;

function assembleRecipeData(req) {

    var recipeData = {
        title: req.body.title,
        producer: req.body.producer,
        ingredients: [],
        preCook: [],
        numSteps: req.body.numSteps,
        steps: req.body.steps,
        nutritionValues: req.body.nutritionValues,
        imgDir: req.body.imgDir,
        raters: req.body.raters,
        favoriters: req.body.favoriters
    }
    console.log('req.body.steps in assembleRecipeData: ' + JSON.stringify(req.body.steps));

    req.body.ingredients.forEach(element => {
        recipeData.ingredients.push(element.name + ' | ' + element.amount);
    });
    if (recipeData.producer === 'Hello Fresh' || recipeData.producer === 'Home Chef') {
        req.body.preCook.forEach(element => {
            recipeData.preCook.push(element.body);
        });
    }

    // console.log(chalk.green('in assemble: ' + JSON.stringify(recipeData)));

    return recipeData;

}