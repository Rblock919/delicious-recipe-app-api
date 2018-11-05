var express = require('express');
var servicesRouter = express.Router();

var router = (nav) => {

    var servicesController = require('../controllers/servicesController')();

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
        })
        .post(servicesController.addRecipe);

    return servicesRouter;
}

module.exports = router;