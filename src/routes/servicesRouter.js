var express = require('express');
var servicesRouter = express.Router();

var router = () => {

    var servicesController = require('../controllers/servicesController')();

    servicesRouter.use(servicesController.middleware);

    return servicesRouter;
}

module.exports = router;