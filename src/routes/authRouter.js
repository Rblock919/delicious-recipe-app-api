const express = require('express');
const authRouter = express.Router();

const router = (User, Login) => {
  const authController = require('../controllers/authController')(User, Login);

  authRouter.route('/signUp').post(authController.signUp);

  authRouter.route('/signIn').post(authController.signIn);

  authRouter.route('/signOut').get(authController.signOut);

  authRouter.route('/getUserData').get(authController.getUserData);

  return authRouter;
};

module.exports = router;
