/** @member {Object} */
const chalk = require('chalk').default;
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');
const jwt = require('jsonwebtoken');

const authController = (User, Login) => {

  const signUp = async (req, res) => {

    const newUser = new User({
      username: escape(req.body.username),
      password: req.body.password,
      isAdmin: false
    });

    try {
      const createdUser = await newUser.save();
      const payload = {sub: createdUser._id};
      const token = await jwt.sign(payload, authConfig.tokenSecret, {expiresIn: ((7 * 24 * 60 * 60) * 1000)});
      const cookieToken = await jwt.sign(payload, authConfig.cookieSecret, {expiresIn: ((7 * 24 * 60 * 60) * 1000)});
      const user = {
        _id: createdUser._id,
        username: createdUser.username,
        password: createdUser.password,
        isAdmin: false
      };

      req.session.login(user, (err) => {
        // newly updated req.session is available here. If you try to access below the async nature will give you old req.session
        if (err) {
          console.error('error saving user to session');
          return res.status(500).send({ErrMessage: 'Error creating session for newly created user.'});
        } else {
          res.status(201).cookie('tkn', cookieToken, {
            path: '/api',
            httpOnly: true,
            secure: JSON.parse(process.env.SECURE_COOKIES),
            sameSite: true,
            maxAge: ((7 * 24 * 60 * 60) * 1000) // 1 week
          }).send({token, user});
        }
      });

    } catch (err) {
      console.log(chalk.red(err));
      if (err.code === 11000) {
        res.status(409).send({ErrMessage: 'Username Already Exists'});
      } else {
        res.status(500).send({ErrMessage: 'Error creating new user.'});
      }
    }

  };

  const signIn = async (req, res) => {
    //slow down brute force login attempts
    const delayResponse = (response) => {
      setTimeout(() => {
        response();
      }, 600)
    };

    console.log('Remote Address: ' + req.connection.remoteAddress);

    const clientIp = req.connection.remoteAddress;
    const userData = req.body;
    const identityKey = `${userData.username}-${clientIp}`;

    if (await Login.inProgress(identityKey)) {
      return delayResponse(() => res.status(500).send({ErrMessage: 'Login already in progress'}));
    }

    if (!await Login.canAuthenticate(identityKey)) {
      await Login.endProgress(identityKey);
      return delayResponse(() => {
        res.status(500).send({ErrMessage: 'The account is temporarily locked out due to excessive number of login attempts. Please wait a few minutes'});
      });
    }

    const query = {username: escape(userData.username)};
    let payload = {};

    const existingUser = await User.findOne(query, '-__v').exec();

    let validPassword;
    if (existingUser) {
      validPassword = await existingUser.passwordIsValid(userData.password);
    }

    if (existingUser && validPassword) {

      payload = {sub: existingUser._id};
      const token = await jwt.sign(payload, authConfig.tokenSecret, {expiresIn: ((7 * 24 * 60 * 60) * 1000)});
      const cookieToken = await jwt.sign(payload, authConfig.cookieSecret, {expiresIn: ((7 * 24 * 60 * 60) * 1000)});
      console.log(!!(token && cookieToken));
      const user = {
        _id: existingUser._id,
        username: existingUser.username,
        isAdmin: existingUser.isAdmin
      };

      req.session.login(user, (err) => {
        if (err) {
          console.error('error saving user to session');
        }
        // newly updated req.session is available here. If you try to access below the async nature will give you old req.session
      });

      await Login.successfulLoginAttempt(identityKey);

      return delayResponse(() => {
        res.status(200).cookie('tkn', cookieToken, {
          // path: '/',
          path: '/api',
          httpOnly: true,
          secure: JSON.parse(process.env.SECURE_COOKIES),
          sameSite: false,
          maxAge: ((7 * 24 * 60 * 60) * 1000) // 1 week
        }).send({user: user, token: token});
      });

    } else {
      await Login.failedLoginAttempt(identityKey);
      return delayResponse(() => res.status(401).send({ErrMessage: 'Invalid username or password'}));
    }

  };

  const signOut = (req, res) => {
    req.session.logout((err) => {
      if (err) {
        console.error(chalk.red(`Error destroying session: ${err}`));
        res.status(500).send({ErrMessage: 'Error destroying session'});
      } else {
        res.sendStatus(200);
      }
    });
  };

  const getUserData = async (req, res) => {
    let userId;
    let reqId;
    let payload;
    let cookiePayload;
    let sessionId;

    console.log(`req headers: ${JSON.stringify(req.headers)}`);

    if (!req.header('Authorization')) {
      return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
    }

    const token = req.header('Authorization').split(' ')[1];
    const { tkn, id } = req.cookies;

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
        return res.status(500).send({ErrMessage: 'Error validating tokens'});
      }

      if (!payload) {
        console.log('auth header invalid');
        return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
      } else {
        userId = payload.sub;
        // userId = cookiePayload.sub;

        try {
          reqId = new objectId(userId);
        } catch (error) {
          console.log(chalk.red(`err parsing user id into objectId: ${error}`));
        }
      }

    } else {
      console.log('no auth token set');
      return res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
    }

    try {
      const user = await User.findById(reqId, '-__v -password');
      if (user) {
        res.status(200).send({user});
      } else {
        res.status(404).send({ErrMessage: 'User Not Found'});
      }
    } catch (err) {
      console.log('Error: ' + err);
      res.sendStatus(500);
    }

  };

  return {
    signUp,
    signIn,
    signOut,
    getUserData
  };

};

module.exports = authController;
