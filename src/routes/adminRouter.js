var express = require('express');
var adminRouter = express.Router();

var router = function (nav) {

    adminRouter.route('/addRecipes')
        .get(function (req, res) {
            res.send('Inserting Recipes');
        });

    return adminRouter;
}

module.exports = router;