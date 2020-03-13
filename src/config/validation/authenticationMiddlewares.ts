import chalk from 'chalk';
import jwt from 'jsonwebtoken';
import authConfig from '../auth/authConfig';
import { checkIfUserExists, checkIfUserIsAdmin } from './userChecker';

// const chalk = require('chalk');
// const jwt = require('jsonwebtoken');
// const authConfig = require('../auth/authConfig');
// const userChecker = require('./userChecker');

const getMiddleWares = User => {
  const nonAdminMiddleWare = async (req, res, next) => {
    let payload;

    // console.log(`req: ${req.path}`);

    if (!req.header('Authorization')) {
      return res
        .status(401)
        .send({ ErrMessage: 'Unauthorized. Missing Auth Header' });
    }

    const token = req.header('Authorization').split(' ')[1];
    // const { tkn, id } = req.cookies;

    // if (!!id) {
    //   sessionId = id.split('.')[0].slice(2);
    //   // Do not need to query the data base, this is already done by the mongo store tool. Just compare to session object id
    //   if (sessionId !== req.session.id) {
    //     return res.status(401).send({ErrMessage: 'Invalid authorization cookie'});
    //   }
    // } else {
    //   return res.status(401).send({ErrMessage: 'Missing authorization cookie'})
    // }

    if (token !== 'null') {
      try {
        payload = await jwt.verify(token, authConfig.tokenSecret);
        // cookiePayload = await jwt.verify(tkn, authConfig.cookieSecret);
      } catch (error) {
        console.error(error);
        return res.sendStatus(500);
      }

      if (!payload) {
        console.log('auth header invalid');
        return res
          .status(401)
          .send({ ErrMessage: 'Unauthorized. Auth Header Invalid' });
      }
      if (payload.exp > Date.now() / 1000) {
        // or use payload from local storage
        checkIfUserExists(User, payload.sub, (err, isFound) => {
          if (err) {
            console.error(chalk.red(err));
            return res.sendStatus(500);
          }
          if (isFound) {
            req.userId = payload.sub;
            // TODO: determine if returning this function causes a bug
            return next();
          }
          return res
            .status(401)
            .send({ ErrMessage: 'Unauthorized. UserId invalid' });
        });
      } else {
        return res
          .status(401)
          .send({ ErrMessage: 'Unauthorized. Expired token cookie' });
      }
    } else {
      console.log('NO TOKEN FOUND IN MW');
      return res
        .status(401)
        .send({ ErrMessage: 'Unauthorized. Missing Token' });
    }
  };

  const adminMiddleWare = async (req, res, next) => {
    let payload;
    // let cookiePayload;
    // let sessionId;

    if (!req.header('Authorization')) {
      return res
        .status(401)
        .send({ ErrMessage: 'Unauthorized. Missing Auth Header' });
    }

    const token = req.header('Authorization').split(' ')[1];
    // const { tkn, id } = req.cookies;
    // console.log('tkn: ' + tkn);

    // if (!!id) {
    //   sessionId = id.split('.')[0].slice(2);
    //   if (sessionId !== req.session.id) {
    //     return res.status(401).send({ErrMessage: 'Invalid authorization cookie'})
    //   }
    // } else {
    //   return res.status(401).send({ErrMessage: 'Missing authorization cookie'})
    // }

    if (token !== 'null') {
      try {
        payload = await jwt.verify(token, authConfig.tokenSecret);
        // cookiePayload = await jwt.verify(tkn, authConfig.cookieSecret);
      } catch (error) {
        console.error(error);
        return res.sendStatus(500);
      }

      if (!payload) {
        console.log('auth header invalid');
        return res
          .status(401)
          .send({ ErrMessage: 'Unauthorized. Auth Header Invalid' });
      }
      if (payload.exp > Date.now() / 1000) {
        // or use payload from local storage
        checkIfUserIsAdmin(User, payload.sub, (err, isAdmin) => {
          if (err) {
            console.log(chalk.red(`Error: ${err}`));
            return res.sendStatus(500);
          }
          if (isAdmin) {
            req.userId = payload.sub;
            return next();
          }
          return res.status(401).send({ ErrMessage: 'User is not admin' });
        });
      } else {
        return res
          .status(401)
          .send({ ErrMessage: 'Unauthorized. Expired token cookie' });
      }
    } else {
      console.log('NO TOKEN FOUND IN MW');
      res.status(401).send({ ErrMessage: 'Unauthorized. Missing Token' });
    }
  };
  return {
    nonAdminMiddleWare,
    adminMiddleWare,
  };
};

// module.exports = getMiddleWares;
export default getMiddleWares;
