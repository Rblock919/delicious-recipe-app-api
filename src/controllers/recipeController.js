const jwt = require('jwt-simple');
/** @member {Object} */
const chalk = require('chalk').default;
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');
const userChecker = require('../config/strategies/user-checker');

function assembleRecipeData(req) {

  const recipeData = {
    title: req.body.title,
    producer: req.body.producer,
    ingredients: [],
    preCook: [],
    steps: req.body.steps,
    nutritionValues: req.body.nutritionValues,
    imgDir: req.body.imgDir,
    raters: req.body.raters,
    favoriters: req.body.favoriters
  }

  req.body.ingredients.forEach((element) => {
    recipeData.ingredients.push(element.name + ' | ' + element.amount);
  });

  if (recipeData.producer === 'Hello Fresh' || recipeData.producer === 'Home Chef') {
    req.body.preCook.forEach((element) => {
      recipeData.preCook.push(element.body);
    });
  }

  return recipeData;
}

const recipeController = (Recipe, newRecipe) => {

  //Handle forwarding requests to main page for users that aren't logged in
  // eslint-disable-next-line consistent-return
  const middleware = (req, res, next) => {
    let payload;

    if (!req.header('Authorization')) {
      return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
    }

    const token = req.header('Authorization').split(' ')[1];

    if (token !== 'null') {

      try {
        payload = jwt.decode(token, authConfig.secret);
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
              res.status(401).send({ErrMessage: 'Unauthorized. UserId invalid'});
            }
          }
        });

      }

    } else {
      console.log('NO TOKEN FOUND IN MW');
      res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
    }

    // if (!req.user) {
    // console.log('User not logged in');
    // res.redirect('/');
    // return;
    // } else {
    // next();
    // }
  };

  const getIndex = (req, res) => {
    const query = {};

    Recipe.find(query, (err, recipes) => {
      if (err) {
        console.log(chalk.red(err));
        res.sendStatus(500);
      } else {
        res.status(200).send(recipes);
      }
    });
  };

  const getById = (req, res) => {
    let id;
    let query;
    // for testing spinner icon & route animations in front end
    // setTimeout(() => {
    // var id = new objectId(req.params.id);
    // var query = {_id: id};

    // Recipe.findOne(query, (err, recipe) => {
    // if (err) {
    // console.log(err);
    // res.sendStatus(500);
    // }
    // res.status(200).send(recipe);
    // });
    // }, 1000)
    try {
      id = new objectId(req.params.id);
      query = {_id: id};

      Recipe.findOne(query, (err, recipe) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        }
        res.status(200).send(recipe);
      });
    } catch (error) {
      console.log(chalk.red(`Error making objectId or retrieve recipe: ${error}`));
      res.status(400).send({ErrMessage: 'Bad Request'});
    }

  };

  const addRecipe = async (req, res) => {
    let id;
    let query;
    let recipeToSave;
    let proceed = true;

    try {
      id = new objectId(req.body.approvalId);
      query = {_id: id};
    } catch (error) {
      console.log(chalk.red(error));
      proceed = false;
    }

    if (proceed) {
      recipeToSave = new Recipe({
        title: req.body.recipe.title,
        producer: req.body.recipe.producer,
        ingredients: [],
        preCook: [],
        steps: req.body.recipe.steps,
        nutritionValues: req.body.recipe.nutritionValues,
        favoriters: [],
        raters: {},
        imgDir: req.body.recipe.imgDir
      });

      req.body.recipe.ingredients.forEach((element) => {
        recipeToSave.ingredients.push(element.name + ' | ' + element.amount);
      });
      if (req.body.recipe.producer === 'Hello Fresh' || req.body.recipe.producer === 'Home Chef') {
        req.body.recipe.preCook.forEach((element) => {
          recipeToSave.preCook.push(element.body);
        });
      };

      await newRecipe.deleteOne(query, (err) => {
        if (err) {
          console.log(chalk.red('ERROR DELETING RECIPE FROM APPROVAL LIST: \n' + err));
        } else {
          // res.status(201).send({id: returnId});
        }
      });

      await recipeToSave.save((err, createdRecipe) => {
        if (err) {
          console.log(chalk.red(err));
          res.sendStatus(500);
        } else {
          console.log(chalk.green('successfully saved new recipe'));
          console.log('ReturnId: ' + createdRecipe._id);
          res.status(201).send({id: createdRecipe._id});
        }
      });
    }

  };

  const updateRecipe = (req, res) => {
    let id;
    let query;
    let recipeData;

    userChecker.checkIfUserIsAdmin(req.userId, (err, isAdmin) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        if (isAdmin === true) {

          try {
            id = new objectId(req.body._id);
            query = {_id: id};
            recipeData = assembleRecipeData(req);

            Recipe.findOneAndUpdate(query, recipeData, (err, doc) => {
              if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
              } else {
                console.log(chalk.green('recipe successfully updated'));
                res.sendStatus(200);
              }
              // console.log('doc: ' + doc);
            });
          } catch (error) {
            console.log(chalk.red(error));
            res.sendStatus(500);
          }

        } else {
          res.status(401).send({ErrMessage: 'User is not authorized for action'});
        }
      }
    });

  };

  const deleteRecipe = (req, res) => {
    let id;
    let query;

    userChecker.checkIfUserIsAdmin(req.userId, (err, isAdmin) => {

      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {

        if (isAdmin === true) {

          try {
            id = new objectId(req.params.id);
            query = {_id: id};

            Recipe.deleteOne(query, (err) => {
              if (err) {
                console.log(chalk.red('ERROR: ' + err));
              } else {
                res.sendStatus(200);
              }
            });
          } catch (error) {
            console.log(chalk.red(error));
            res.sendStatus(500);
          }
        } else {
          res.status(401).send({ErrMessage: 'User is not authorized'});
        }

      }

    });

  }

  const favorite = (req, res) => {
    let updatedFavoriters;
    const addingFav = req.body.favoriting;
    let prevFavoriters = req.body.recipe.favoriters;
    let id;
    let query;
    let proceed = true;

    try {
      id = new objectId(req.body.recipe._id);
      query = {_id: id};
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

      updatedFavoriters = {favoriters: prevFavoriters};
      Recipe.findOneAndUpdate(query, updatedFavoriters, (err, doc) => {
        if (err) {
          console.log(chalk.red(err));
          res.sendStatus(500);
        }
        // console.log('doc: ' + JSON.stringify(doc));
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(500);
    }

  };

  const rateRecipe = (req, res) => {
    let recipeId;
    let query;
    let newRaters;
    let updatedRaters;

    try {
      recipeId = new objectId(req.body._id);
      query = {_id: recipeId};

      newRaters = req.body.raters;
      updatedRaters = {raters: newRaters};

      Recipe.findOneAndUpdate(query, updatedRaters, (err, doc) => {
        if (err) {
          console.log(chalk.red(err));
          res.sendStatus(500);
        }
        // console.log('doc: ' + doc);
        res.sendStatus(200);
      });
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }

  };

  const submitForApproval = (req, res) => {

    const recipeData = assembleRecipeData(req);
    const recipeToSave = new newRecipe({
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

    // res.sendStatus(201);
    // return;

    recipeToSave.save((err, createdRecipe) => {
      if (err) {
        console.log(chalk.red(err));
        res.sendStatus(500);
      } else {
        console.log(chalk.green('successfully saved new recipe'));
        // res.sendStatus(201);
        res.status(201).send({id: createdRecipe._id});
      }
    });

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
}

module.exports = recipeController;


