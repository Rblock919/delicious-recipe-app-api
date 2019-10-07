/** @member {Object} */
const chalk = require('chalk').default;
const jwt = require('jsonwebtoken');
const authConfig = require('../auth/authConfig');
const userChecker = require('./userChecker');

const nonAdminMiddleWare = async (req, res, next) => {
  let payload;
  let cookiePayload;
  let sessionId;

  if (!req.header('Authorization')) {
    return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
  }

  const token = req.header('Authorization').split(' ')[1];
  const { tkn, id } = req.cookies;

  if (!!id) {
    sessionId = id.split('.')[0].slice(2);
    // Do not need to query the data base, this is already done by the mongo store tool. Just compare to session object
    if (sessionId !== req.session.id) {
      return res.status(401).send({ErrMessage: 'Invalid authorization cookie'});
    }
  } else {
    return res.status(401).send({ErrMessage: 'Missing authorization cookie'})
  }

  if (token !== 'null' && tkn) {

    try {
      payload = await jwt.verify(token, authConfig.tokenSecret);
      cookiePayload = await jwt.verify(tkn, authConfig.cookieSecret);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    if (!payload) {
      console.log('auth header invalid');
      return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
    } else {

      if (cookiePayload.exp > (Date.now() / 1000)) {
        // or use payload (from local storage)
        userChecker.checkIfUserExists(cookiePayload.sub, (err, isFound) => {
          if (err) {
            console.error(chalk.red(err));
          } else {
            if (isFound) {
              req.userId = payload.sub;
              next();
            } else {
              return res.status(401).send({ErrMessage: 'Unauthorized. UserId invalid'});
            }
          }
        });

      } else {
        return res.status(401).send({ErrMessage: 'Unauthorized. Expired token cookie'});
      }

    }

  } else {
    console.log('NO TOKEN FOUND IN MW');
    return res.status(401).send({ErrMessage: 'Unauthorized. Missing Token(s)'});
  }

};

const adminMiddleWare = async (req, res, next) => {
  let cookiePayload;
  let payload;
  let sessionId;

  if (!req.header('Authorization')) {
    return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
  }

  const token = req.header('Authorization').split(' ')[1];
  const { tkn, id } = req.cookies;
  // console.log('tkn: ' + tkn);

  if (!!id) {
    sessionId = id.split('.')[0].slice(2);
    if (sessionId !== req.session.id) {
      return res.status(401).send({ErrMessage: 'Invalid authorization cookie'})
    }
  } else {
    return res.status(401).send({ErrMessage: 'Missing authorization cookie'})
  }

  if (token !== 'null' && tkn) {

    try {
      payload = await jwt.verify(token, authConfig.tokenSecret);
      cookiePayload = await jwt.verify(tkn, authConfig.cookieSecret);
    } catch (error) {
      console.error(error);
    }

    if (!payload) {
      console.log('auth header invalid');
      return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
    } else {

      if (cookiePayload.exp > (Date.now() / 1000)) {
        // or use cookiePayload (currently from local storage)
        userChecker.checkIfUserIsAdmin(payload.sub, (err, isAdmin) => {
          if (err) {
            console.log(chalk.red(`Error: ${err}`));
            return res.sendStatus(500);
          } else {
            if (isAdmin && req.sessionID === sessionId) {
              req.userId = payload.sub;
              next();
            } else {
              res.status(401).send({ErrMessage: 'User is not admin'});
            }
          }
        });

      } else {
        return res.status(401).send({ErrMessage: 'Unauthorized. Expired token cookie'});
      }

    }

  } else {
    console.log('NO TOKEN FOUND IN MW');
    res.status(401).send({ErrMessage: 'Unauthorized. Missing Token(s)'});
  }
};

module.exports = {nonAdminMiddleWare, adminMiddleWare};
