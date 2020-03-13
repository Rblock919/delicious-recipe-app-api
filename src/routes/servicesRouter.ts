import express from 'express';
import validationSchemas from '../config/validation/authenticationMiddlewares';
import getServicesController from '../controllers/servicesController';

const servicesRouter = express.Router();

const router = User => {
  const { nonAdminMiddleWare } = validationSchemas(User);
  const servicesController = getServicesController(User);

  servicesRouter.use(nonAdminMiddleWare);

  return servicesRouter;
};

export default router;
