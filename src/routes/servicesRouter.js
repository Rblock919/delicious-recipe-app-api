var express = require('express');
var servicesRouter = express.Router();

var router = (nav, Recipe) => {

    var servicesController = require('../controllers/servicesController')(nav, Recipe);

    servicesRouter.use(servicesController.middleware);

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

    servicesRouter.route('/edit')
        .get(servicesController.getEditList);

    servicesRouter.route('/edit/:id')
        .get(servicesController.getEditPage)
        .post(servicesController.editRecipe);

    return servicesRouter;
}

module.exports = router;