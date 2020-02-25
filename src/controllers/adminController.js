const chalk = require('chalk');
const objectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;
const uri = require('../config/db/dbconnection');
const recipes = require('../data/recipeData');
const newRecipes = require('../data/newRecipeData');

const adminController = (User, NewRecipe) => {

  const addRecipes = (req, res) => {

    MongoClient.connect(uri.remote, {useNewUrlParser: true}, (err, client) => {

      const db = client.db('recipeApp-dev');
      const collection = db.collection('recipes');

      if (err) {
        console.log(chalk.red.bold.underline(err));
        res.sendStatus(500);
      }

      collection.insertMany(recipes, (err, results) => {

        if (err) {
          console.log(chalk.red.bold.underline(err));
          res.sendStatus(500);
        } else {
          res.send(results);
        }

        client.close();
      });
    });

  };

  const addNewRecipes = (req, res) => {
    MongoClient.connect(uri.remote, {useNewUrlParser: true}, (err, client) => {

      const db = client.db('recipeApp-dev');
      const collection = db.collection('recipes');

      if (err) {
        console.log(chalk.red.bold.underline(err));
        res.sendStatus(500);
      }

      collection.insertMany(newRecipes, (err, results) => {

        if (err) {
          console.log(chalk.red.bold.underline(err));
          res.sendStatus(500);
        } else {
          res.send(results);
        }

        client.close();
      });
    });
  };

  const getUsers = async (req, res) => {
    try {
      const users = await User.find({}, '-__v -password');
      res.status(200).send(users);
    } catch (err) {
      console.log(chalk.red(err));
      res.sendStatus(500);
    }
  };

  const updateUsers = async (req, res) => {
    console.log(`req.body: ${JSON.stringify(req.body)}`);
    const editedUsers = req.body;
    const setToFalseIds = [];
    const setToTrueIds = [];
    let id;
    let counter = 0;
    let proceed = true;

    while (counter < editedUsers.length) {
      try {
        id = new objectId(editedUsers[counter]._id);
        if (editedUsers[counter].isAdmin) {
          setToTrueIds.push(id);
        } else {
          setToFalseIds.push(id);
        }
        counter++;
      } catch (error) {
        console.log(chalk.red(error));
        proceed = false;
      }
    }

    if (proceed) {

      try {
        if (setToTrueIds.length > 0) {
          const response = await User.updateMany({_id: {$in: setToTrueIds}}, {$set: {isAdmin: true}});
        }
        if (setToFalseIds.length > 0) {
          const response = await User.updateMany({_id: {$in: setToFalseIds}}, {$set: {isAdmin: false}});
        }

        res.sendStatus(200);
      } catch (err) {
        console.log(chalk.red(`Error updating users: ${err}`));
        res.sendStatus(500);
      }

    } else {
      res.sendStatus(500);
    }

  };

  const getApprovalList = async (req, res) => {
    try {
      const recipes = await NewRecipe.find({});
      res.status(200).send(recipes);
    } catch (err) {
      console.log(chalk.red(err));
      res.sendStatus(500);
    }
  };

  const getApprovalById = async (req, res) => {
    let id;

    try {
      id = new objectId(req.params.id);
      const recipe = await NewRecipe.findById(id);

      res.status(200).send(recipe);
    } catch (error) {
      console.log(chalk.red(error));
      res.sendStatus(500);
    }
  };

  return {
    addRecipes,
    addNewRecipes,
    getApprovalList,
    getApprovalById,
    getUsers,
    updateUsers
  };
};

module.exports = adminController;

