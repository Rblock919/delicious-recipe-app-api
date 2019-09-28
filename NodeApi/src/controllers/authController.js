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
      const token = jwt.encode(payload, authConfig.secret);
      const user = {
        _id: createdUser._id,
        username: createdUser.username,
        password: createdUser.password,
        isAdmin: false
      };

      res.status(201).send({token, user});
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
      // const token = jwt.encode(payload, authConfig.secret);
      const token = await jwt.sign(payload, authConfig.secret, {expiresIn: ((7 * 24 * 60 * 60) * 1000)});
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
        res.status(200).cookie('tkn', token, {
          httpOnly: true,
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
    let id;
    let payload;

    if (!req.header('Authorization')) {
      res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
    }

    const token = req.header('Authorization').split(' ')[1];

    if (token !== 'null') {

      try {
        payload = jwt.decode(token, authConfig.secret);
      } catch (error) {
        console.error(error);
      }

      if (!payload) {
        console.log('auth header invalid');
        res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
      } else {
        userId = payload.sub;

        try {
          id = new objectId(userId);
        } catch (error) {
          console.log(chalk.red(error));
        }
      }

    } else {
      console.log('no auth token set');
      res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
    }

    try {
      const user = await User.findById(id, '-__v -password');
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
