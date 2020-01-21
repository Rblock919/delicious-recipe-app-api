const express = require('express');
const recipeRouter = express.Router();
const recipeSchema = require('../config/validation/validationSchemas');

const router = (User, Recipe, NewRecipe) => {
  const {nonAdminMiddleWare, adminMiddleWare} = require('../config/validation/authenticationMiddlewares')(User);
  const graphQLRecipeSchema = require('../models/graphql/schemas/recipeSchema')(Recipe);
  const recipeController = require('../controllers/recipeController')(Recipe, NewRecipe);

  // TODO: reactivate middleware
  // recipeRouter.use(nonAdminMiddleWare);

  recipeRouter.route('/')
    .get(recipeController.getIndex);

  recipeRouter.route('/:id')
    .get(recipeController.getById);

  // TODO add back adminMiddleWare
  recipeRouter.route('/add')
    .post(recipeSchema, recipeController.addRecipe);

  recipeRouter.route('/submit')
    .post(recipeSchema, recipeController.submitForApproval);

  recipeRouter.route('/update')
    .patch(adminMiddleWare, recipeSchema, recipeController.updateRecipe);

  // TODO: add back adminMiddleWare
  recipeRouter.route('/delete/:id')
    .delete(recipeController.deleteRecipe);

  // TODO: add back adminMiddleWare
  recipeRouter.route('/reject/:id')
    .delete(recipeController.rejectRecipe);

  recipeRouter.route('/favorite')
    .post(recipeController.favorite);

  recipeRouter.route('/rate')
    .post(recipeController.rateRecipe);

  return recipeRouter;
};

module.exports = router;
