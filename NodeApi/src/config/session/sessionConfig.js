const session = require('express-session');
const authConfig = require('../auth/authConfig');
const MongoStore = require('connect-mongo')(session);

function sessionConfig(app, mongoose) {

  session.Session.prototype.login = function (user, cb) {
    const req = this.req;
    req.session.regenerate((err) => {
      if (err) {
        cb(err);
      } else {
        req.session.userInfo = user;
        cb();
      }
    });
  };

  session.Session.prototype.logout = function (cb) {
    const req = this.req;
    req.session.destroy((err) => {
      if (err) {
        cb(err);
      } else {
        cb();
      }
    });
  };

  const mongooseStore = new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: (7 * 24 * 60 * 60) // 1 week
  });

  app.use(session({
    store: mongooseStore,
    secret: authConfig.sessionsSecret,
    cookie: {
      path: '/api',
      // domain: 'http://192.168.1.7:3000/api/',
      httpOnly: true,
      secure: false,
      // sameSite: false,
      maxAge: ((7 * 24 * 60 * 60) * 1000) // 1 week
    },
    name: 'id',
    resave: true,
    rolling: true,
    saveUninitialized: false
  }));

}

module.exports = sessionConfig;

