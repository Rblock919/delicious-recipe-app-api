const jwt = require('jwt-simple');
/** @member {Object} */
const chalk = require('chalk').default;
const objectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;
const authConfig = require('../config/auth/authConfig');
const uriS = require('../config/db/dbconnection');
const recipes = require('../data/recipeData');
const newRecipes = require('../data/newRecipeData');
const userChecker = require('../config/strategies/user-checker');

const adminController = (User, newRecipe) => {

    // TO-DO: GO EXTRA STEP AND MAKE SURE USER IS ALSO ADMIN IN THIS MIDDLEWARE
    // eslint-disable-next-line consistent-return
    const middleware = (req, res, next) => {
        let payload;

        if (!req.header('Authorization')) {
            return res.status(401).send({ErrMessage: 'Unauthorized. Missing Auth Header'});
        }

        let token = req.header('Authorization').split(' ')[1];

        if (token !== 'null') {

            try {
                payload = jwt.decode(token, authConfig.secret);
            } catch (error) {
                console.error(error);
            }

            if (!payload) {
                console.log('auth header invalid');
                return res.status(401).send({ErrMessage: 'Unauthorized. Auth Header Invalid'});
            } else {

                userChecker.checkIfUserIsAdmin(payload.sub, (err, isAdmin) => {
                    if (err) {
                        console.log(chalk.red(`Error: ${err}`));
                        res.sendStatus(500);
                    } else {
                        if (isAdmin) {
                            req.userId = payload.sub;
                            next();
                        } else {
                            res.status(401).send({ErrMessage: 'User is not admin'});
                        }
                    }
                });

            }

        } else {
            console.log('NO TOKEN FOUND IN MW');
            res.status(401).send({ErrMessage: 'Unauthorized. Missing Token'});
        }

        // if (!req.user) {
        // console.log('User not logged in');
        // res.redirect('/');
        // return;
        // } else {
        // next();
        // }
    };

    const addRecipes = (req, res) => {

        MongoClient.connect(uriS.remote, {useNewUrlParser: true}, function (err, client) {

                const db = client.db('recipeApp');
                const collection = db.collection('recipes');

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    res.sendStatus(500);
                }

                collection.insertMany(recipes, function (err, results) {

                    if (err) {
                        console.log(chalk.red.bold.underline(err));
                        res.sendStatus(500);
                    } else {
                        res.send(results);
                    }

                    client.close();
                });
            });
    };

    const addNewRecipes = (req, res) => {
        MongoClient.connect(uriS.remote, {useNewUrlParser: true}, function (err, client) {

            const db = client.db('recipeApp');
            const collection = db.collection('recipes');

            if (err) {
                console.log(chalk.red.bold.underline(err));
                res.sendStatus(500);
            }

            collection.insertMany(newRecipes, function (err, results) {

                if (err) {
                    console.log(chalk.red.bold.underline(err));
                    res.sendStatus(500);
                } else {
                    res.send(results);
                }

                client.close();
            });
        });
    };

    const getUsers = (req, res) => {
        const query = {};

        User.find(query, (err, users) => {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }
            res.status(200).send(users);
        });
    };

    const updateUsers = async (req, res) => {
        const editedUsers = req.body;
        let setToFalseIds = [];
        let setToTrueIds = [];
        let id;
        let counter = 0;
        let proceed = true;

        while (counter < editedUsers.length) {
            try {
                id = objectId(editedUsers[counter]._id);
                if (editedUsers[counter].isAdmin) {
                    setToTrueIds.push(id);
                } else {
                    setToFalseIds.push(id);
                }
                counter++;
            } catch (error) {
                console.log(chalk.red(error));
                proceed = false;
            }
        }

        if (proceed === true) {

            if (setToTrueIds.length > 0) {
                await User.updateMany({_id: {$in: setToTrueIds}}, {$set: {isAdmin: true}}, function (err, response) {
                    if (err) {
                        console.log(chalk.red(err));
                        res.sendStatus(500);
                    }

                });
            }

            if (setToFalseIds.length > 0) {
                await User.updateMany({_id: {$in: setToFalseIds}}, {$set: {isAdmin: false}}, function (err, response) {
                    if (err) {
                        console.log(chalk.red(err));
                        res.sendStatus(500);
                    }

                });
            }

            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }

    };

    const getApprovalList = (req, res) => {
        const query = {};

        newRecipe.find(query, (err, recipes) => {
            if (err) {
                console.log(chalk.red(err));
                res.sendStatus(500);
            }
            //res.status(200);
            //console.log('Recipes object: ' + recipes);
            res.status(200).send(recipes);
        });
    };

    const getApprovalById = (req, res) => {
        let id;
        let query;

        try {
            id = new objectId(req.params.id);
            query = {_id: id};

            newRecipe.findOne(query, (err, recipe) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                }
                res.status(200).send(recipe);
            });
        } catch (error) {
            console.log(chalk.red(error));
            res.sendStatus(500);
        }

    };

    return {
        middleware,
        addRecipes,
        addNewRecipes,
        getApprovalList,
        getApprovalById,
        getUsers,
        updateUsers
    };
};

module.exports = adminController;

