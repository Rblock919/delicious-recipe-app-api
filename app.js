const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const uriS = require('./src/config/db/dbconnection');

mongoose.connect(uriS.remote, {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log(chalk.inverse('connected to db in app.js'));
    }
});

const newRecipe = require('./src/models/recipeModel').newRecipe;
const Recipe = require('./src/models/recipeModel').recipe;
const User = require('./src/models/userModel');

const app = express();
const port = process.env.PORT || 3000;

//Load routers
const recipeRouter = require('./src/routes/recipeRouter')(Recipe, newRecipe);
const serviceRouter = require('./src/routes/servicesRouter')();
const adminRouter = require('./src/routes/adminRouter')(User, newRecipe);
const authRouter = require('./src/routes/authRouter')(User);

//Parse incoming request params into a nice json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(cookieParser());
app.use(session({secret: 'recipe'}));
// require('./src/config/passport')(app);

//Establish auto-scanning static file directory reference locations
// app.use(express.static('public'));
// app.use(express.static('src/views'));

//Set view engine
// app.set('views', 'src/views');
// app.set('view engine', 'ejs');

//Establish express routers
app.use('/api/recipes', recipeRouter);
app.use('/api/services', serviceRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);

//Serve up static angular files
// app.use(express.static(path.join(__dirname, 'WebClient/dist/WebClient')));
// // app.use(favicon)
// app.all('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'WebClient/dist/WebClient/index.html'));
// });

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.red.bold.underline(err));
    }
    console.log(chalk.green('Running server on port: ') + chalk.green.underline(port));
});

//log to the console when the mongoose connection is closed
mongoose.connection.on('disconnected', () => {
    console.log(chalk.magenta.underline('\nMongoose default connection disconnected'));
});

//whenever node exits, close the mongoose connection and log to console
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log(chalk.blueBright.underline('Mongoose connection closed thru application exiting process'));
        process.exit(0);
    });
});

// 2.0.46 = old version of mongodb module
