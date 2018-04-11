var express = require('express');
var recipeRouter = express.Router();

// var recipeData = require('../data/recipeData');

var router = function (nav) {

    var recipeController = require('../controllers/recipeController')(null, nav);

    recipeRouter.use(recipeController.middleware);

    recipeRouter.route('/')
        .get(recipeController.getIndex);

    recipeRouter.route('/:id')
        .get(recipeController.getById);

    return recipeRouter;
}

module.exports = router;