const express = require('express');
const recipeRouter = express.Router();
const recipeSchema = require('../config/validation/validationSchemas');
const ExpressGraphQL = require('express-graphql');

const router = (User, Recipe, NewRecipe) => {
  const {nonAdminMiddleWare, adminMiddleWare} = require('../config/validation/authenticationMiddlewares')(User);
  const graphQLRecipeSchema = require('../models/graphql/schemas/recipeSchema')(Recipe);
  const recipeController = require('../controllers/recipeController')(Recipe, NewRecipe);

  recipeRouter.use(nonAdminMiddleWare);

  recipeRouter.route('/')
    .all(ExpressGraphQL({
      schema: graphQLRecipeSchema,
      graphiql: false
    }));
  //.get(recipeController.getIndex);

  // recipeRouter.route('/test')
  //   .all(ExpressGraphQL({
  //     schema: graphQLRecipeSchema,
  //     graphiql: false
  //   }));

  recipeRouter.route('/:id')
    .get(recipeController.getById);

  recipeRouter.route('/add')
    .post(adminMiddleWare, recipeSchema, recipeController.addRecipe);

  recipeRouter.route('/submit')
    .post(recipeSchema, recipeController.submitForApproval);

  recipeRouter.route('/update')
    .patch(adminMiddleWare, recipeSchema, recipeController.updateRecipe);

  recipeRouter.route('/delete/:id')
    .delete(adminMiddleWare, recipeController.deleteRecipe);

  recipeRouter.route('/reject/:id')
    .delete(adminMiddleWare, recipeController.rejectRecipe);

  recipeRouter.route('/favorite')
    .post(recipeController.favorite);

  recipeRouter.route('/rate')
    .post(recipeController.rateRecipe);

  return recipeRouter;
};

module.exports = router;
