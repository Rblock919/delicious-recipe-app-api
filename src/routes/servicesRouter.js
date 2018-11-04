var express = require('express');
var servicesRouter = express.Router();

var router = function (nav) {
    servicesRouter.route('/')
        .get(function (req, res) {
            res.render('serviceHome', {
                nav: nav
            });
        });

    servicesRouter.route('/add')
        .get(function (req, res) {
            res.render('addRecipe', {
                nav: nav
            });
        });

    return servicesRouter;
}

module.exports = router;