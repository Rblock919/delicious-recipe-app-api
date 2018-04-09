var express = require('express');
var servicesRouter = express.Router();

var router = function (nav) {
    servicesRouter.route('/')
        .get(function (req, res) {
            res.send('Services Page Coming Soon.');
        });

    return servicesRouter;
}

module.exports = router;