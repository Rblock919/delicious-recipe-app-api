const connectionString = {
  local: 'mongodb://localhost:27017/recipeApp',
  remote: 'mongodb+srv://rblock:$ynthL!fe@rbcluster-lubzp.mongodb.net/recipeApp'
};

module.exports = connectionString;

// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://rblock:<password>@rbcluster-lubzp.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// const connectionString = {
//     local: 'mongodb://localhost:27017',
//     remote: 'mongodb+srv://rblock:$ynthL!fe@rbcluster-lubzp.mongodb.net/recipeApp'
//   };

//   module.exports = connectionString;

// git update-index --assume-unchanged src/config/db/dbconnection.js
