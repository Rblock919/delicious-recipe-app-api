var passport = require('passport');

var passportConfig = (app) => {

    console.log('In passport config file');

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    require('./strategies/local.strategy')();
}

module.exports = passportConfig;