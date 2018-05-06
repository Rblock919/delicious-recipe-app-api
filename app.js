const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/recipeApp';
mongoose.connect(dbURI);
const Recipe = require('./src/models/recipeModel');

const app = express();
const port = process.env.PORT || 3000;

//Load hard-coded nav data
const nav = require('./src/data/navData');

//Load routers
const recipeRouter = require('./src/routes/recipeRouter')(nav, Recipe);
const serviceRouter = require('./src/routes/servicesRouter')(nav);
const adminRouter = require('./src/routes/adminRouter')();
const authRouter = require('./src/routes/authRouter')();

//Parse incoming request params into a nice json object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({secret: 'recipe'}));
require('./src/config/passport')(app);

//Establish auto-scanning static file directory reference locations
app.use(express.static('public'));
app.use(express.static('src/views'));

//Set view engine
app.set('views', 'src/views');
app.set('view engine', 'ejs');

//Establish express routers
app.use('/Recipes', recipeRouter);
app.use('/Services', serviceRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', (req, res) => {
    //Check if a user exists in the session, if not then send to signin page
    if (!req.user) {
        res.render('signin', {
            nav: nav
        });
    } else {
        //Else send the user to the apps home page for logged-in users
        res.render('userhome', {
            title: 'Hello from render',
            nav: nav
        });
    }
});

app.get('/register', (req, res) => {
    res.render('register', {
        nav: nav
    });
});

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.red.bold.underline(err));
    }
    console.log(chalk.green('Running server on port: ' + port));
});

//log to the console when the mongoose connection is closed
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});

//whenever node exits, close the mongoose connection and log to console
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log(chalk.blueBright.underline('Mongoose default connection successfully closed thru application exiting process'));
        process.exit(0);
    });
});

// 2.0.46 = old version of mongodb module