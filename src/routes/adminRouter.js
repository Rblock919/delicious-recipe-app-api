var express = require('express');
var adminRouter = express.Router();

var router = (User, newRecipe) => {

    var adminController = require('../controllers/adminController')(User, newRecipe);

    adminRouter.use(adminController.middleware);

    adminRouter.route('/addRecipes')
        .get(adminController.addRecipes);

    adminRouter.route('/addNewRecipes')
        .get(adminController.addNewRecipes);

    adminRouter.route('/getUsers')
        .get(adminController.getUsers);
    
    adminRouter.route('/updateUsers')
        .post(adminController.updateUsers);

    adminRouter.route('/approval')
        .get(adminController.getApprovalList);

    adminRouter.route('/approval/:id')
        .get(adminController.getApprovalById);

    return adminRouter;
}

module.exports = router;
