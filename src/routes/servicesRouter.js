const express = require('express');
const servicesRouter = express.Router();

const router = User => {
  const {
    nonAdminMiddleWare,
  } = require('../config/validation/authenticationMiddlewares')(User);

  const servicesController = require('../controllers/servicesController')();

  servicesRouter.use(nonAdminMiddleWare);

  return servicesRouter;
};

module.exports = router;
