/** @member {Object} */
const chalk = require('chalk').default;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const https = require('https');

const app = express();
const port = process.env.PORT || 3000;

const remote = process.env.REMOTE || false;
if (!remote) {
  require('dotenv').config();
}

// Configure security related response headers
require('./src/config/auth/headerSecurity')(app);

// Parse incoming request params into a nice json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// Not sure if this is needed if just serving up angular files statically via node/express
// Configure cross-origin requests
// app.use(cors({credentials: true, origin: true}));

const uri = require('./src/config/db/dbconnection');
mongoose.connect(uri.remote, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if (!err) {
    console.log(chalk.inverse('connected to db in server.js'));
  } else {
    console.log(chalk.red(`Error connecting to database in server.js... ${err}`));
  }
});

// Session configuration
require('./src/config/session/sessionConfig')(app, mongoose);

//Load mongoose models
const { NewRecipe, Recipe } = require('./src/models/mongoose/recipeModel')(mongoose);
const User = require('./src/models/mongoose/userModel')(mongoose);
const Login = require('./src/models/mongoose/loginModel')(mongoose);

// Load routers
const recipeRouter = require('./src/routes/recipeRouter')(User, Recipe, NewRecipe);
const serviceRouter = require('./src/routes/servicesRouter')(User);
const adminRouter = require('./src/routes/adminRouter')(User, NewRecipe);
const authRouter = require('./src/routes/authRouter')(User, Login);

// Middleware for session testing purposes
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

// Apply routers to api routes
app.use('/api/recipes', recipeRouter);
app.use('/api/services', serviceRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

// Serve up static angular files
app.use(express.static(path.join(__dirname, 'dist/WebClient')));
app.all('*', (req, res) => {
  if (path.resolve(__dirname, 'index.html').includes('WebClient')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.sendFile(path.join(__dirname, 'dist/WebClient/index.html'));
  }
});

// Create http server
app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red.bold.underline(err));
  }
  console.log(chalk.green('Running server on port: ' + chalk.underline(port)));
});

// // Create https server
// const options = {
//   // eslint-disable-next-line no-sync
//   key: fs.readFileSync('src/data/server.key'),
//   // eslint-disable-next-line no-sync
//   cert: fs.readFileSync('src/data/server.crt')
// };
//
// try {
//   https.createServer(options, app).listen(port);
//   console.log(chalk.green(`Running https server on port: ${chalk.underline(port)}`));
// } catch (err) {
//   console.log(chalk.red(`Error creating https server: ${err}`));
// }

// Configure redirect app, although I think it's not needed for heroku hosted app
// const redirectApp = express();
// redirectApp.all('*', (req, res, next) => {
//   res.redirect(307, `https://localhost:3000${req.url}`);
//   next();
// });
//
// redirectApp.listen(3001, (err) => {
//   if (err) {
//     console.log(chalk.red.bold.underline(err));
//   }
//   console.log(chalk.green('Running server on port: ' + chalk.underline(port)));
// });


// Log to the console when the mongoose connection is closed
mongoose.connection.on('disconnected', () => {
  console.log(chalk.magenta.underline('\nMongoose connection has been closed'));
});

// Whenever node exits, close the mongoose connection and log to console
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(chalk.blueBright.underline('Mongoose connection closed thru application exiting process'));
    process.exit(0);
  });
});
