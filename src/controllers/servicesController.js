/** @member {Object} */
const chalk = require('chalk').default;
const jwt = require('jwt-simple');
const authConfig = require('../config/auth/authConfig');
const userChecker = require('../config/strategies/user-checker');

const servicesController = () => {

    //Handle forwarding requests to main page for users that aren't logged in
    // eslint-disable-next-line consistent-return
    const middleware = (req, res, next) => {
        let payload;

        if (!req.header('Authorization')) {
            // console.log('NO AUTH TOKEN FOUND IN NODE MIDDLEWARE');
            return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
        }

        let token = req.header('Authorization').split(' ')[1];

        if (token !== 'null') {

            try {
                payload = jwt.decode(token, authConfig.secret);
            } catch (error) {
                console.error(error);
            }
            // console.log('payload: ' + JSON.stringify(payload));

            if (!payload) {
                console.log('auth header invalid');
                return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
            } else {
                userChecker.checkIfUserExists(payload.sub, (err, isFound) => {
                    if (err) {
                        console.error(chalk.red(err));
                    } else {
                        if (isFound === true) {
                            req.userId = payload.sub;
                            next();
                        } else {
                            res.status(401).send({ErrMessage: 'Unauthorized. UserId invalid'});
                        }
                    }
                });
            }

        } else {
            console.log('NO TOKEN FOUND IN MW');
            res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
        }
    }

    return {
        middleware
    };

};

module.exports = servicesController;
