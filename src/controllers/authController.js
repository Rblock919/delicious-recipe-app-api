/** @member {Object} */
const chalk = require('chalk').default;
const jwt = require('jwt-simple');
const objectId = require('mongodb').ObjectId;
const authConfig = require('../config/auth/authConfig');

const authController = (User, login) => {

  const signUp = (req, res) => {

    console.log('Username on signup call: ' + req.body.username);
    console.log('Password on singup call: ' + req.body.password);

    console.log('Body req upon registration' + JSON.stringify(req.body));

    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      isAdmin: false
    });

    newUser.save((err, createdUser) => {
      if (err) {
        console.log(chalk.red(err));
        if (err.code === 11000) {
          console.log('Error: Duplicate UserName')
          res.status(409).send({ErrMessage: 'Username Already Exists'});
          // res.send({message: 'Username Already Exists'})
        }
      } else {
        console.log('Success saving new user');
        console.log('new user: ' + createdUser);
        const payload = {sub: createdUser._id};
        const token = jwt.encode(payload, authConfig.secret);
        const user = {
          _id: createdUser._id,
          username: createdUser.username,
          password: createdUser.password,
          isAdmin: false
        };

        res.status(201).send({token, user});
      }
    });

  };

  const signIn = async (req, res) => {
    //slow down brute force login attempts
    const delayResponse = (response) => {
      setTimeout(() => {
        response();
      }, 1000)
    };

    console.log('Remote Address: ' + req.connection.remoteAddress);

    const clientIp = req.connection.remoteAddress;
    const userData = req.body;
    const identityKey = `${userData.username}-${clientIp}`;

    if (await login.inProgress(identityKey)) {
      return delayResponse(() => res.status(500).send({ErrMessage: 'Login already in progress'}));
    }

    if (!await login.canAuthenticate(identityKey)) {
      return delayResponse(() => {
        res.status(500).send({ErrMessage: 'The account is temporarily locked out due to excessive number of login attempts. Please wait a few minutes'});
      });
    }

    const query = {username: userData.username};
    let payload = {};

    const existingUser = await User.findOne(query, '-__v').exec();
    const validPassword = await existingUser.passwordIsValid(userData.password);

    console.log(`valid: ${validPassword}`);

    if (existingUser && await existingUser.passwordIsValid(userData.password)) {

      payload = {sub: existingUser._id}
      const token = jwt.encode(payload, authConfig.secret);
      const user = {
        _id: existingUser._id,
        username: existingUser.username,
        isAdmin: existingUser.isAdmin
      };
      await login.successfulLoginAttempt(identityKey);
      return delayResponse(() => res.status(200).send({user: user, token: token}));
    } else {
      await login.failedLoginAttempt(identityKey);
      return delayResponse(() => res.status(401).send({ErrMessage: 'Invalid username or password'}));
    }

    // User.findOne(query, '-__v', (err, user) => {
    //
    //     if (err) {
    //         console.log(chalk.red(err));
    //         return delayResponse(() => res.sendStatus(500));
    //     }
    //
    //     if (!user) {
    //         console.log('user not found');
    //         return delayResponse(() => res.status(401).send({ErrMessage: 'Username Not Found'}));
    //     } else {
    //
    //         user.passwordIsValid(userData.password, (err, results) => {
    //             if (err) {
    //                 console.error(err);
    //                 return delayResponse(() => res.sendStatus(500));
    //             } else {
    //                 if (results) {
    //                     payload = {sub: user._id}
    //                     const token = jwt.encode(payload, authConfig.secret);
    //                     return delayResponse(() => res.status(200).send({user: user, token: token}));
    //                 } else {
    //                     console.log('password is not a match');
    //                 }
    //             }
    //         });
    //
    //     }
    //
    // });
  };

  const getUserData = (req, res) => {
    let query = {};
    let userId;
    let id;
    let payload;

    if (!req.header('Authorization')) {
      // console.log('NO AUTH TOKEN FOUND IN NODE MIDDLEWARE');
      res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
    }

    const token = req.header('Authorization').split(' ')[1];

    if (token !== 'null') {
      console.log('token: ' + token);

      try {
        payload = jwt.decode(token, authConfig.secret);
      } catch (error) {
        console.error(error);
      }

      if (!payload) {
        console.log('auth header invalid');
        res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
      } else {
        console.log('payload: ' + payload);
        userId = payload.sub;

        try {
          id = new objectId(userId);
          query = {_id: id};
          console.log('id from token: ' + userId);
        } catch (error) {
          console.log(chalk.red(error));
        }
      }

    } else {
      console.log('no auth token set');
      res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
    }

    User.findOne(query, '-__v', (err, user) => {
      if (err) {
        console.log('Error: ' + err);
        res.sendStatus(500);
      }
      if (user) {
        if (user.isAdmin) {
          console.log('user found and is admin');
        } else {
          console.log('user found and is not admin');
        }
        res.status(200).send({user});
      } else {
        res.status(404).send({ErrMessage: 'User Not Found'});
      }
    });
  };

  return {
    signUp,
    signIn,
    getUserData
  };

};

module.exports = authController;
