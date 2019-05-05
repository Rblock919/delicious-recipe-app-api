const {MongoClient} = require('mongodb');
const assert = require('assert');
const chalk = require('chalk');

// Connection URL
const url = 'mongodb://localhost:27017';

// const MongoClient = require(‘mongodb’).MongoClient;

const uriS = require('../config/db/dbconnection');

// Database Name
const dbName = 'recipeApp';

(async function mongo() {
    console.log('Uris: ' + uriS.remote);
    let client;
    try {
        client = await MongoClient.connect(uriS.remote, {useNewUrlParser: true});
        console.log(chalk.green('Connected to Server'));
        const db = client.db(dbName);

        const col = await db.collection('recipes');
        const docs = await col.find({'title': 'Pineapple Poblano Beef Tacos'}).toArray();
        console.log('Testing');
        console.log(docs);
    } catch (err) {
        console.log(chalk.red(err.stack));
    }

    client.close();
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

async function main(db) {
    var docs = await findDocumentsNew(db);
    console.log(docs);
    console.log(chalk.green('Done Printing docs in an async es2016+ fashion'));
}

const insertDocuments = function (db, callback) {
    /*// Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        {a: 1}, {a: 2}, {a: 3}
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log('Inserted 3 documents into the collection');
        callback(result);
    });*/
    callback();
}

const findDocumentsNew = function (db) {

    return new Promise(function (fulfill, reject) {
        // Get the documents collection
        const collection = db.collection('recipes');
        // Find some documents
        collection.find({'title': 'Pineapple Poblano Beef Tacos'}).toArray(function (err, docs) {
            //assert.equal(err, null);
            if (err) {
                reject(err);
            }
            console.log('Found the following records');
            //console.log(docs)
            fulfill(docs);
        });
    });
}

const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('recipes');
    // Find some documents
    collection.find({'title': 'Pineapple Poblano Beef Tacos'}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log('Found the following records');
        //console.log(docs)
        callback(docs);
    });
}