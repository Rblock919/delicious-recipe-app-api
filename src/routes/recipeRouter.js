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

    recipeRouter.route('/add')
        .post(recipeController.addRecipe);

    recipeRouter.route('/update')
        .patch(recipeController.updateRecipe);

    return recipeRouter;
}

module.exports = router;