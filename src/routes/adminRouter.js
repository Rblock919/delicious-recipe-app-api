const express = require('express');
const adminRouter = express.Router();

const router = (User, NewRecipe) => {
  const {adminMiddleWare} = require('../config/validation/authenticationMiddlewares')(User);
  // const graphQLUserSchema = require('../models/graphql/schemas/userSchema')(User);
  // const graphQLNewRecipeSchema = require('../models/graphql/schemas/recipeSchema')(NewRecipe);
  const adminController = require('../controllers/adminController')(User, NewRecipe);

  // TODO: reactivate middleware
  // adminRouter.use(adminMiddleWare);

  adminRouter.route('/addRecipes')
    .get(adminController.addRecipes);

  adminRouter.route('/addNewRecipes')
    .get(adminController.addNewRecipes);

  adminRouter.route('/approval')
    .get(adminController.getApprovalList);

  adminRouter.route('/approval/:id')
    .get(adminController.getApprovalById);

  adminRouter.route('/updateUsers')
    .post(adminController.updateUsers);

  adminRouter.route('/users')
    .get(adminController.getUsers);

  return adminRouter;
};

module.exports = router;
