import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import 'dotenv/config';
import headerSecurity from './config/auth/headerSecurity';
import recipeModels from './models/mongoose/recipeModel';
import userModel from './models/mongoose/userModel';
import loginModel from './models/mongoose/loginModel';
import recipeRoutes from './routes/recipeRouter';
import servicesRoutes from './routes/servicesRouter';
import authRoutes from './routes/authRouter';
import adminRoutes from './routes/adminRouter';
import uri from './config/db/dbconnection';

// import path from 'path';
// import fs from 'fs';
// import https from 'https';

const app = express();
const port = process.env.PORT || 3000;

// Configure security related response headers
headerSecurity(app);

// Parse incoming request params into a nice json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Not sure if this is needed if just serving up angular files statically via node/express
// Configure cross-origin requests
app.use(cors({ credentials: true, origin: true }));

mongoose.connect(
  uri.remote,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log(chalk.inverse('connected to db in server.js'));
    } else {
      console.log(
        chalk.red(`Error connecting to database in server.js... ${err}`)
      );
    }
  }
);

// Session configuration
// require('./src/config/session/sessionConfig')(app, mongoose);

// Load mongoose models
const { NewRecipe, Recipe } = recipeModels(mongoose);
const User = userModel(mongoose);
const Login = loginModel(mongoose);

// Load routers
const recipeRouter = recipeRoutes(User, Recipe, NewRecipe);
const serviceRouter = servicesRoutes(User);
const authRouter = authRoutes(User, Login);
const adminRouter = adminRoutes(User, NewRecipe);

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
// app.use(express.static(path.join(__dirname, 'dist/WebClient')));
// app.all('*', (req, res) => {
//   if (path.resolve(__dirname, 'index.html').includes('WebClient')) {
//     res.sendFile(path.join(__dirname, 'index.html'));
//   } else {
//     res.sendFile(path.join(__dirname, 'dist/WebClient/index.html'));
//   }
// });

// Create http server
app.listen(port, () => {
  console.log(chalk.green(`Running server on port: ${chalk.underline(port)}`));
});

// Log to the console when the mongoose connection is closed
mongoose.connection.on('disconnected', () => {
  console.log(chalk.blue('Closing mongoose connection...'));
});

const gracefulShutdown = () => {
  mongoose.connection.close(() => {
    console.log(
      chalk.blueBright('Mongoose connection closed. Exiting node process...')
    );
    process.exit(0);
  });
};

// Whenever node exits, close the mongoose connection and log to console
process.on('SIGINT', () => {
  console.log(chalk.yellow('Exiting app via SIGINT...'));
  gracefulShutdown();
});

// Nodemon must have updated because now I have to handle this exiting event to kill node process
process.on('SIGUSR2', () => {
  console.log(chalk.yellow('Exiting app via nodemon...'));
  gracefulShutdown();
});

// Create https server
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
