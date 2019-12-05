const express = require('express');
const adminRouter = express.Router();
const ExpressGraphQL = require('express-graphql');

const router = (User, NewRecipe) => {
  const {adminMiddleWare} = require('../config/validation/authenticationMiddlewares')(User);
  const graphQLUserSchema = require('../models/graphql/schemas/userSchema')(User);
  const graphQLNewRecipeSchema = require('../models/graphql/schemas/recipeSchema')(NewRecipe);
  const adminController = require('../controllers/adminController')(User, NewRecipe);

  adminRouter.use(adminMiddleWare);

  adminRouter.route('/addRecipes')
    .get(adminController.addRecipes);

  adminRouter.route('/addNewRecipes')
    .get(adminController.addNewRecipes);

  adminRouter.route('/getUsers')
    .all(ExpressGraphQL({
      schema: graphQLUserSchema,
      graphiql: false
    }));
  // .get(adminController.getUsers);

  adminRouter.route('/updateUsers')
    .post(adminController.updateUsers);

  adminRouter.route('/approval')
    .all(ExpressGraphQL({
      schema: graphQLNewRecipeSchema,
      graphiql: false
    }));
  // .get(adminController.getApprovalList);

  adminRouter.route('/approval/:id')
    .get(adminController.getApprovalById);

  return adminRouter;
};

module.exports = router;
