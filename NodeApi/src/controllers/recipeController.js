/** @member {Object} */
const chalk = require('chalk').default;
const objectId = require('mongodb').ObjectId;
const userChecker = require('../config/validation/userChecker');
const {validationResult} = require('express-validator');

function assembleRecipeData(req) {

  const recipeData = {
    title: req.body.recipe.title,
    producer: req.body.recipe.producer,
    ingredients: [],
    preCook: [],
    steps: req.body.recipe.steps,
    nutritionValues: req.body.recipe.nutrition,
    imgDir: req.body.recipe.imgDir,
    raters: req.body.recipe.raters,
    favoriters: req.body.recipe.favoriters
  };

  req.body.recipe.ingredients.forEach((element) => {
    recipeData.ingredients.push(element.name + ' | ' + element.amount);
  });

  if (recipeData.producer === 'Hello Fresh' || recipeData.producer === 'Home Chef') {
    req.body.recipe.preCook.forEach((element) => {
      recipeData.preCook.push(element.body);
    });
  }

  return recipeData;
}

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
      const recipe = await Recipe.findById(id);

      if (recipe) {
        res.status(200).send(recipe);
      } else {
        res.status(404).send({ErrMessage: 'Recipe not found'});
      }
    } catch (error) {
      console.log(chalk.red(`Error making objectId or retrieve recipe: ${error}`));
      res.status(400).send({ErrMessage: 'Bad Request'});
    }
  };

  const addRecipe = async (req, res) => {
    let id;
    let recipeToSave;
    let recipeData;
    let proceed = true;

    try {
      id = new objectId(req.body.approvalId);
    } catch (error) {
      console.log(chalk.red(error));
      proceed = false;
    }

    const errors = validationResult(req);
    // console.log('\nerrors: ' + JSON.stringify(errors));
    // console.log(JSON.stringify(req.body));
    //
    // console.log(`Errors Empty: ${errors.isEmpty()}`);
    // return;

    if (proceed && errors.isEmpty()) {
      recipeData = assembleRecipeData(req);
      recipeToSave = new Recipe(recipeData);

      try {
        await NewRecipe.findByIdAndDelete(id);
        const createdRecipe = await recipeToSave.save();
        console.log(chalk.green('successfully saved new recipe'));
        res.status(201).send({id: createdRecipe._id});
      } catch (err) {
        console.log(chalk.red(err));
        res.sendStatus(500);
      }

    } else {
      res.status(400).send({ErrMessage: 'Bad Request'});
    }

  };

  const updateRecipe = async (req, res) => {
    let id;
    let recipeData;

    const errors = validationResult(req);
    // console.log('\nerrors: ' + JSON.stringify(errors));
    // console.log(JSON.stringify(req.body));
    // console.log(`Errors Empty: ${errors.isEmpty()}`);

    if (errors.isEmpty()) {
      try {
        id = new objectId(req.body.recipe._id);
        recipeData = assembleRecipeData(req);

        const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipeData);

        if (updatedRecipe) {
          console.log(chalk.green('recipe successfully updated'));
          res.sendStatus(200);
        } else {
          res.status(404).send({ErrMessage: 'Could not find recipe to update in backend'});
        }

      } catch (error) {
        console.log(chalk.red(error));
        res.sendStatus(500);
      }
    } else {
      res.status(400).send({ErrMessage: 'Bad Request'});
    }

  };

  const deleteRecipe = async (req, res) => {
    let id;

    try {
      id = new objectId(req.params.id);
      await Recipe.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }

  };

  const favorite = async (req, res) => {
    const addingFav = req.body.favoriting;
    let prevFavoriters = req.body.recipe.favoriters;
    let proceed = true;
    let updatedFavoriters;
    let id;

    try {
      id = new objectId(req.body.recipe._id);
    } catch (error) {
      console.log(chalk.red(error));
      proceed = false;
    }

    if (proceed) {

      if (addingFav) { // user is favoriting recipe
        prevFavoriters.push(req.userId);
      } else { // user is unfavoriting recipe
        prevFavoriters = prevFavoriters.filter((uId) => uId !== '' + req.userId)
      }

      try {
        updatedFavoriters = {favoriters: prevFavoriters};
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updatedFavoriters);
        res.sendStatus(200);
      } catch (err) {
        console.log(chalk.red(err));
        res.sendStatus(500);
      }

    } else {
      res.sendStatus(500);
    }

  };

  const rateRecipe = async (req, res) => {
    let recipeId;
    let newRaters;
    let updatedRaters;

    try {
      recipeId = new objectId(req.body._id);

      newRaters = req.body.raters;
      updatedRaters = {raters: newRaters};

      const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedRaters);
      res.sendStatus(200);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }

  };

  const submitForApproval = async (req, res) => {


    const errors = validationResult(req);
    // console.log('\nerrors: ' + JSON.stringify(errors));
    // console.log(JSON.stringify(req.body));
    //
    // console.log(`Errors Empty: ${errors.isEmpty()}`);

    if (!errors.isEmpty()) {
      console.log('errors are not empty');
      return res.status(400).send({ErrMessage: 'Bad Request'});
    } else {
      const recipeData = assembleRecipeData(req);
      const recipeToSave = new NewRecipe({
        title: recipeData.title,
        producer: recipeData.producer,
        ingredients: recipeData.ingredients,
        preCook: recipeData.preCook,
        steps: recipeData.steps,
        nutritionValues: recipeData.nutritionValues,
        favoriters: [],
        raters: {},
        imgDir: recipeData.imgDir
      });

      try {
        const createdRecipe = await recipeToSave.save();
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
    submitForApproval,
    rateRecipe,
    favorite
  };
};

module.exports = recipeController;


