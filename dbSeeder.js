/** @member {Object} */
const chalk = require('chalk').default;
const MongoClient = require('mongodb').MongoClient;
const uri = require('./src/config/db/dbconnection');
const recipes = require('./src/data/recipeData');
// TODO: implement seeding for app-users and db-user
const newRecipes = require('./src/data/newRecipeData');
const users = require('./src/data/userData');

// mongo refers to mongo docker container name
MongoClient.connect('mongo', {useNewUrlParser: true, useUnifiedTopology: true}, async (err, client) => {
  const db = client.db('recipeApp');
  const collection = db.collection('recipes');

  if (err) {
    console.log(chalk.red.bold.underline(err));
  }

  try {
    const results = await collection.insertMany(recipes);
    // const results = await collection.deleteMany({});
    console.log(chalk.green('successfully seeded recipes!'));
    console.log(`results: ${results}`);
  } catch (err) {
    console.log(`err seeding db: ${err}`);
  } finally {
    await client.close(false);
  }

});
