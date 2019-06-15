var express = require('express');
var adminRouter = express.Router();

var router = (User) => {

    var adminController = require('../controllers/adminController')(User);

    adminRouter.route('/addRecipes')
        .get(adminController.addRecipes);

    adminRouter.route('/addNewRecipes')
        .get(adminController.addNewRecipes);

    return adminRouter;
}

module.exports = router;