const express = require('express');
const servicesRouter = express.Router();
const {nonAdminMiddleWare} = require('../config/validation/authenticationMiddlewares');

const router = () => {

  const servicesController = require('../controllers/servicesController')();

  servicesRouter.use(nonAdminMiddleWare);

  return servicesRouter;
};

module.exports = router;
