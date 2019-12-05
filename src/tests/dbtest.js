/** @member {Object} */
const chalk = require('chalk').default;
const assert = require('assert');
const objectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const uri = require('../config/db/dbconnection');

//Load mongoose models
const User = require('../models/userModel');
const Login = require('../models/loginModel');
const Recipe = require('../models/recipeModel').recipe;
const NewRecipe = require('../models/recipeModel').newRecipe;

(async function mongo() {
  try {

    const connection = await mongoose.connect(uri.local, {useNewUrlParser: true});
    console.log(!!connection);
    const users = await User.find({});
    console.log(`users: ${users}`);

    mongoose.connection.close(() => {
      console.log(chalk.blueBright.underline('Mongoose connection closed thru application exiting process'));
      process.exit(0);
    });
  } catch (err) {
    console.log(chalk.red(err.stack));
  }

}());

/*
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    //main(db);

    //use an iffy so need need to have separate async function when calling functions that return promises
    (async function getDocs() {
        const docs = await findDocumentsNew(db);
        console.log(docs);
        console.log(chalk.green('Done finding docs in the iffy'));
    }());

    //var docs = await findDocumentsNew(db);
    findDocuments(db, function () {
        client.close();
        console.log(chalk.green('Done finding records in a non es2016+ fashion'));
    });
});
*/

// async function main(db) {
//   const docs = await findDocumentsNew(db);
//   console.log(docs);
//   console.log(chalk.green('Done Printing docs in an async es2016+ fashion'));
// }

// const insertDocuments = function (db, callback) {
//   /*// Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//         {a: 1}, {a: 2}, {a: 3}
//     ], function (err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log('Inserted 3 documents into the collection');
//         callback(result);
//     });*/
//   callback();
// }
//
// const findDocumentsNew = function (db) {
//
//   return new Promise(((fulfill, reject) => {
//     // Get the documents collection
//     const collection = db.collection('recipes');
//     // Find some documents
//     collection.find({'title': 'Pineapple Poblano Beef Tacos'}).toArray((err, docs) => {
//       //assert.equal(err, null);
//       if (err) {
//         reject(err);
//       }
//       console.log('Found the following records');
//       //console.log(docs)
//       fulfill(docs);
//     });
//   }));
// }
//
// const findDocuments = function (db, callback) {
//   // Get the documents collection
//   const collection = db.collection('recipes');
//   // Find some documents
//   collection.find({'title': 'Pineapple Poblano Beef Tacos'}).toArray((err, docs) => {
//     assert.equal(err, null);
//     console.log('Found the following records');
//     //console.log(docs)
//     callback(docs);
//   });
// }
