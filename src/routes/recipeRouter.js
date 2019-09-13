const express = require('express');
const recipeRouter = express.Router();

const router = (Recipe, newRecipe) => {

  const recipeController = require('../controllers/recipeController')(Recipe, newRecipe);

  recipeRouter.use(recipeController.middleware);

  recipeRouter.route('/')
    .get(recipeController.getIndex);

  recipeRouter.route('/:id')
    .get(recipeController.getById);

  recipeRouter.route('/add')
    .post(recipeController.addRecipe);

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
}

module.exports = router;
