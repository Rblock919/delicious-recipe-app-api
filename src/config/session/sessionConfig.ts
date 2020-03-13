// const session = require('express-session');
import session from 'express-session';
import getMongoStore from 'connect-mongo';
import authConfig from '../auth/authConfig';

const { MongoStore } = getMongoStore(session);

// const authConfig = require('../auth/authConfig');
// const MongoStore = require('connect-mongo')(session);

function sessionConfig(app, mongoose) {
  session.Session.prototype.login = (user, cb) => {
    const { req } = this;
    req.session.regenerate(err => {
      if (err) {
        cb(err);
      } else {
        req.session.userInfo = user;
        cb();
      }
    });
  };

  session.Session.prototype.logout = cb => {
    const { req } = this;
    req.session.destroy(err => {
      if (err) {
        cb(err);
      } else {
        cb();
      }
    });
  };

  const mongooseStore = new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 7 * 24 * 60 * 60, // 1 week
  });

  app.use(
    session({
      store: mongooseStore,
      secret: authConfig.sessionsSecret,
      cookie: {
        path: '/api',
        httpOnly: true,
        secure: JSON.parse(process.env.SECURE_COOKIES),
        sameSite: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
      },
      name: 'id',
      resave: true,
      rolling: true,
      saveUninitialized: false,
    })
  );
}

export default sessionConfig;
