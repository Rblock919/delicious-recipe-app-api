const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var chalk = require('chalk');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'recipeApp';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    const db = client.db(dbName);

    main(db);

    //var docs = await findDocumentsNew(db);
    findDocuments(db, function() {
        client.close();
        console.log(chalk.green('Done finding records in a non es2016+ fashion'));
    });
});

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