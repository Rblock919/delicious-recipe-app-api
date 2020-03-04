const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;
const { validationResult } = require('express-validator');

const recipeController = (Recipe, NewRecipe) => {
  const getIndex = async (req, res) => {
    try {
      const recipes = await Recipe.find({});
      res.status(200).send(recipes);
    } catch (err) {
      console.log(chalk.red(`Error getting recipe list: ${err}`));
      res.sendStatus(500);
    }
  };

  const getById = async (req, res) => {
    try {
      const id = new objectId(req.params.id);
      const recipe = await Recipe.findById(id, '-__v');

      if (recipe) {
        res.status(200).send(recipe);
      } else {
        res.status(404).send({ ErrMessage: 'Recipe not found' });
      }
    } catch (error) {
      console.log(
        chalk.red(`Error making objectId or retrieve recipe: ${error}`)
      );
      res.status(400).send({ ErrMessage: 'Bad Request' });
    }
  };

  const addRecipe = async (req, res) => {
    try {
      const id = new objectId(req.body.approvalId);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log('errors: ' + JSON.stringify(errors));
        return res.status(400).send({ ErrMessage: 'Bad Request' });
      } else {
        const recipeData = req.body.recipe;
        const recipeToSave = new Recipe(recipeData);

        await NewRecipe.findByIdAndDelete(id);
        const createdRecipe = await recipeToSave.save();

        console.log(chalk.green('successfully saved new recipe'));
        res.status(201).send({ id: createdRecipe._id });
      }
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }
  };

  const updateRecipe = async (req, res) => {
    const errors = validationResult(req);
    console.log('\nerrors: ' + JSON.stringify(errors));
    console.log('in updateRecipe: ' + JSON.stringify(req.body));
    // console.log(`Errors Empty: ${errors.isEmpty()}`);

    if (errors.isEmpty()) {
      try {
        const id = new objectId(req.body.recipe._id);
        const recipeData = req.body.recipe;
        delete recipeData._id;

        const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipeData);

        if (updatedRecipe) {
          console.log(chalk.green('recipe successfully updated'));
          res.sendStatus(200);
        } else {
          res
            .status(404)
            .send({ ErrMessage: 'Could not find recipe to update in backend' });
        }
      } catch (error) {
        console.log(chalk.red(error));
        res.sendStatus(500);
      }
    } else {
      res.status(400).send({ ErrMessage: 'Bad Request' });
    }
  };

  const deleteRecipe = async (req, res) => {
    try {
      const id = new objectId(req.params.id);
      await Recipe.findByIdAndDelete(id);
      console.log('recipe successfully deleted');
      res.sendStatus(200);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }
  };

  const rejectRecipe = async (req, res) => {
    try {
      const id = new objectId(req.params.id);
      await NewRecipe.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  };

  const favorite = async (req, res) => {
    try {
      const id = new objectId(req.body._id);
      const newFavoriters = req.body.favoriters;
      const updatedFavoriters = { favoriters: newFavoriters };
      await Recipe.findByIdAndUpdate(id, updatedFavoriters);
      res.sendStatus(200);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }
  };

  const rateRecipe = async (req, res) => {
    try {
      const recipeId = new objectId(req.body._id);
      const updatedRaters = { raters: req.body.raters };

      console.log(`updatedRaters: ${JSON.stringify(req.body.raters)}`);
      // console.log(`raters size: ${(req.body.raters)}`);

      await Recipe.findByIdAndUpdate(recipeId, updatedRaters);
      res.sendStatus(200);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }
  };

  const submitForApproval = async (req, res) => {
    const errors = validationResult(req);
    console.log('\nerrors: ' + JSON.stringify(errors));
    console.log('body: ' + JSON.stringify(req.body));
    //
    // console.log(`Errors Empty: ${errors.isEmpty()}`);

    if (!errors.isEmpty()) {
      console.log('errors are not empty');
      return res.status(400).send({ ErrMessage: 'Bad Request' });
    } else {
      // const recipeData = assembleRecipeData(req);
      const recipeData = req.body.recipe;
      const recipeToSave = new NewRecipe({
        title: recipeData.title,
        producer: recipeData.producer,
        ingredients: recipeData.ingredients,
        preCook: recipeData.preCook,
        steps: recipeData.steps,
        nutritionValues: recipeData.nutritionValues,
        favoriters: [],
        raters: {},
        imgDir: recipeData.imgDir,
      });

      try {
        await recipeToSave.save();
        console.log(chalk.green('successfully saved new recipe'));
        res.sendStatus(201);
      } catch (err) {
        console.log(chalk.red(err));
        res.sendStatus(500);
      }
    }
  };

  return {
    getIndex,
    getById,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    rejectRecipe,
    submitForApproval,
    rateRecipe,
    favorite,
  };
};

module.exports = recipeController;
