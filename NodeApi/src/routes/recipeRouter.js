const express = require('express');
const recipeRouter = express.Router();
const recipeSchema = require('../config/validation/validationSchemas');

const router = (User, Recipe, NewRecipe) => {
  const {nonAdminMiddleWare, adminMiddleWare} = require('../config/validation/authenticationMiddlewares')(User);
  const recipeController = require('../controllers/recipeController')(Recipe, NewRecipe);

  recipeRouter.use(nonAdminMiddleWare);

  recipeRouter.route('/')
    .get(recipeController.getIndex);

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

  recipeRouter.route('/favorite')
    .post(recipeController.favorite);

  recipeRouter.route('/rate')
    .post(recipeController.rateRecipe);

  return recipeRouter;
};

module.exports = router;
