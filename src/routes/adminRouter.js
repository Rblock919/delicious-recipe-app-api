const express = require('express');
const adminRouter = express.Router();

const router = (User, NewRecipe) => {

  const adminController = require('../controllers/adminController')(User, NewRecipe);

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
