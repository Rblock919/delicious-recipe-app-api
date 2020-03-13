import express from 'express';
import getAuthController from '../controllers/authController';

const authRouter = express.Router();

const router = (User, Login) => {
  const authController = getAuthController(User, Login);

  authRouter.route('/signUp').post(authController.signUp);

  authRouter.route('/signIn').post(authController.signIn);

  authRouter.route('/signOut').get(authController.signOut);

  authRouter.route('/getUserData').get(authController.getUserData);

  return authRouter;
};

export default router;
