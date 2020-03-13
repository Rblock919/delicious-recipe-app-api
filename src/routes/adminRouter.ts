import express from 'express';
import getAdminController from '../controllers/adminController';
import validationSchemas from '../config/validation/authenticationMiddlewares';

const adminRouter = express.Router();

const router = (User, NewRecipe) => {
  const { adminMiddleWare } = validationSchemas(User);
  const adminController = getAdminController(User, NewRecipe);

  adminRouter.use(adminMiddleWare);

  adminRouter.route('/approval').get(adminController.getApprovalList);

  adminRouter.route('/approval/:id').get(adminController.getApprovalById);

  adminRouter.route('/updateUsers').post(adminController.updateUsers);

  adminRouter.route('/users').get(adminController.getUsers);

  return adminRouter;
};

export default router;
