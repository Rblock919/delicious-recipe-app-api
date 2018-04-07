var express = require('express');
var chalk = require('chalk');

var app = express();
var port = process.env.PORT || 3000;

app.set('views', 'src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render'
    });
});

app.listen(port, function (err) {
    console.log(chalk.green('Running server on port: ' + port));
});