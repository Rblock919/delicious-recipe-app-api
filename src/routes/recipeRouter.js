var express = require('express');
var recipeRouter = express.Router();

// var recipeData = require('../data/recipeData');

var router = (nav, Recipe) => {

    var recipeController = require('../controllers/recipeController')(nav, Recipe);

    // recipeRouter.use(recipeController.middleware);

    recipeRouter.route('/')
        .get(recipeController.getIndex);

    recipeRouter.route('/:id')
        .get(recipeController.getById);

    return recipeRouter;
}

module.exports = router;