var express = require('express');
var adminRouter = express.Router();

var router = (User) => {

    var adminController = require('../controllers/adminController')(User);

    adminRouter.route('/addRecipes')
        .get(adminController.addRecipes);

    adminRouter.route('/addNewRecipes')
        .get(adminController.addNewRecipes);

    adminRouter.route('/getUsers')
        .get(adminController.getUsers);
    
    adminRouter.route('/updateUsers')
        .post(adminController.updateUsers);

    return adminRouter;
}

module.exports = router;