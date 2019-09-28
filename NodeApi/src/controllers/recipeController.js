/** @member {Object} */
const chalk = require('chalk').default;
const jwt = require('jsonwebtoken');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');
const userChecker = require('../config/validation/userChecker');
const {validationResult} = require('express-validator/check');

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

  const middleware = async (req, res, next) => {
    let payload;

    if (!req.header('Authorization')) {
      return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
    }

    // if (decodedToken.exp > (Date.now() / 1000)) { }

    const token = req.header('Authorization').split(' ')[1];

    if (token !== 'null') {

      try {
        payload = await jwt.verify(token, authConfig.secret);
      } catch (error) {
        console.error(error);
      }

      if (!payload) {
        console.log('auth header invalid');
        return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
      } else {

        userChecker.checkIfUserExists(payload.sub, (err, isFound) => {
          if (err) {
            console.error(chalk.red(err));
          } else {
            if (isFound === true) {
              req.userId = payload.sub;
              next();
            } else {
              return res.status(401).send({ErrMessage: 'Unauthorized. UserId invalid'});
            }
          }
        });

      }

    } else {
      console.log('NO TOKEN FOUND IN MW');
      return res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
    }

  };

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

  const updateRecipe = (req, res) => {
    let id;
    let recipeData;

    userChecker.checkIfUserIsAdmin(req.userId, async (err, isAdmin) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      } else {
        if (isAdmin === true) {

          const errors = validationResult(req);
          console.log('\nerrors: ' + JSON.stringify(errors));
          console.log(JSON.stringify(req.body));
          console.log(`Errors Empty: ${errors.isEmpty()}`);
          return;
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

        } else {
          res.status(401).send({ErrMessage: 'User is not authorized for action'});
        }
      }
    });

  };

  const deleteRecipe = (req, res) => {
    let id;

    userChecker.checkIfUserIsAdmin(req.userId, async (err, isAdmin) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      } else {
        if (isAdmin === true) {

          try {
            id = new objectId(req.params.id);
            await Recipe.findByIdAndDelete(id);

            res.sendStatus(200);
          } catch (error) {
            console.log(chalk.red(error));
            res.sendStatus(500);
          }

        } else {
          res.status(401).send({ErrMessage: 'User is not authorized'});
        }

      }
    });

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

    if (proceed === true) {

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

    const recipeData = assembleRecipeData(req);

    const errors = validationResult(req);
    // console.log('\nerrors: ' + JSON.stringify(errors));
    // console.log(JSON.stringify(req.body));
    //
    // console.log(`Errors Empty: ${errors.isEmpty()}`);

    if (!errors.isEmpty()) {
      console.log('errors are not empty');
      return res.status(400).send({ErrMessage: 'Bad Request'});
    } else {

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
    middleware,
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


