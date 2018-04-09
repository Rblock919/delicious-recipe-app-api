var express = require('express');
var recipeRouter = express.Router();

var recipeData = require('../data/recipeData');

var router = function (nav) {
    recipeRouter.route('/')
        .get(function (req, res) {
            res.render('recipeListView', {
                title: 'Services',
                nav: nav,
                recipes: recipeData
            });
        });

    recipeRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('recipeView', {
                title: 'Services',
                nav: nav,
                recipe: recipeData[id]
            });
        });

    return recipeRouter;
}

module.exports = router;