var express = require('express');
var bodyParser = require('body-parser');
var chalk = require('chalk');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var port = process.env.PORT || 3000;

//Load hard-coded nav data
var nav = require('./src/data/navData');

//Load routers
var recipeRouter = require('./src/routes/recipeRouter')(nav);
var serviceRouter = require('./src/routes/servicesRouter')(nav);
var adminRouter = require('./src/routes/adminRouter')();
var authRouter = require('./src/routes/authRouter')();

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

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: nav
    });
});

app.listen(port, function (err) {
    if (err) {
        console.log(chalk.red.bold.underline(err));
    }
    console.log(chalk.green('Running server on port: ' + port));
});

// 2.0.46 = old version of mongodb module