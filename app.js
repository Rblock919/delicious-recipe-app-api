var express = require('express');
var chalk = require('chalk');

var app = express();
var port = process.env.PORT || 3000;

var nav = [{
                Link: '/Recipes',
                Text: 'Recipes'
            }, {
                Link: '/Services',
                Text: 'Services'
            }];

var recipeRouter = require('./src/routes/recipeRouter')(nav);
var serviceRouter = require('./src/routes/servicesRouter')(nav);

app.use('/Recipes', recipeRouter);
app.use('/Services', serviceRouter);

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', 'src/views');
app.set('view engine', 'ejs');

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