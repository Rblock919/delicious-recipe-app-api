const express = require('express');
const recipeRouter = express.Router();
const caloriesSchema = require('../config/validation/validationSchemas');
const {checkSchema} = require('express-validator');

const router = (Recipe, NewRecipe) => {

  const recipeController = require('../controllers/recipeController')(Recipe, NewRecipe);

  recipeRouter.use(recipeController.middleware);

  recipeRouter.route('/')
    .get(recipeController.getIndex);

  recipeRouter.route('/:id')
    .get(recipeController.getById);

  recipeRouter.route('/add')
    .post(recipeController.addRecipe);
  //   , checkSchema({
  //   'recipe.producer': {
  //     in: ['body'],
  //     isInt: true,
  //     errorMessage: 'Calories is NaN'
  //   }
  // }));

  recipeRouter.route('/submit')
    .post(recipeController.submitForApproval);

  recipeRouter.route('/update')
    .patch(recipeController.updateRecipe);

  recipeRouter.route('/delete/:id')
    .delete(recipeController.deleteRecipe);

  recipeRouter.route('/favorite')
    .post(recipeController.favorite);

  recipeRouter.route('/rate')
    .post(recipeController.rateRecipe);

  return recipeRouter;
};

module.exports = router;
