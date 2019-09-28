/** @member {Object} */
const chalk = require('chalk').default;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const uri = require('./src/config/db/dbconnection');

const app = express();
const port = process.env.PORT || 3000;

const connection = mongoose.connect(uri.local, {useNewUrlParser: true}, (err) => {
  if (!err) {
    console.log(chalk.inverse('connected to db in server.js'));
  } else {
    console.log(chalk.red(`Error connecting to database in server.js... ${err}`));
  }
});

//Load mongoose models
const NewRecipe = require('./src/models/recipeModel').newRecipe;
const Recipe = require('./src/models/recipeModel').recipe;
const User = require('./src/models/userModel');
const Login = require('./src/models/loginModel');

//Load routers
const recipeRouter = require('./src/routes/recipeRouter')(Recipe, NewRecipe);
const serviceRouter = require('./src/routes/servicesRouter')();
const adminRouter = require('./src/routes/adminRouter')(User, NewRecipe);
const authRouter = require('./src/routes/authRouter')(User, Login);

//Parse incoming request params into a nice json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: true}));

app.use(cookieParser());
require('./src/config/session/sessionConfig')(app, mongoose);

//Middleware for session testing purposes
// app.use((req, res, next) => {
// console.log('in new middleware');
// req.session.touch();
// console.log(`Session: ${JSON.stringify(req.session)}`);
// console.log(`cookies: ${JSON.stringify(req.cookies)}`);
// console.log(`session cookie: ${req.cookies.id}`);
// console.log(`actual id of session cookie: ${req.cookies.id.slice(2)}`);
// console.log(`session user info in new MW: ${JSON.stringify(req.session.userInfo)}`);
// console.log(`session cookie: ${JSON.stringify(req.session.cookie)}`);
// console.log(`req session id: ${req.session.id}`);
//   next();
// });
//test comment!!!!!

//Establish express routers
app.use('/api/recipes', recipeRouter);
app.use('/api/services', serviceRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

//Serve up static angular files
// server.use(express.static(path.join(__dirname, 'WebClient/dist/WebClient')));
// server.all('*', (req, res) => {
//   if (path.resolve(__dirname, 'index.html').includes('WebClient')) {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   } else {
//     res.sendFile(path.join(__dirname, 'WebClient/dist/WebClient/index.html'));
//   }
// });

app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red.bold.underline(err));
  }
  console.log(chalk.green('Running server on port: ' + chalk.underline(port)));
});

//log to the console when the mongoose connection is closed
mongoose.connection.on('disconnected', () => {
  console.log(chalk.magenta.underline('\nMongoose default connection disconnected'));
});

//whenever node exits, close the mongoose connection and log to console
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(chalk.blueBright.underline('Mongoose connection closed thru application exiting process'));
    process.exit(0);
  });
});

