const express = require('express');
const servicesRouter = express.Router();

const router = () => {

  const servicesController = require('../controllers/servicesController')();

  servicesRouter.use(servicesController.middleware);

  return servicesRouter;
}

module.exports = router;
