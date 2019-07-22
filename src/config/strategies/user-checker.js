const objectId = require('mongodb').ObjectId;
const userModel = require('../../models/userModel');

function checkIfUserExists(userId, callback) {

    try {
        const id = new objectId(userId);
        const query = {_id: id};
        userModel.findOne(query, (err, foundUser) => {
            if (err) {
                console.log(err);
                callback(err, null);
            }
            if (foundUser) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        });
    } catch (error) {
        console.error(error);
        callback(error, null);
    }

}

function checkIfUserIsAdmin(userId, callback) {

    try {
        const id = new objectId(userId);
        const query = {_id: id};

        userModel.findOne(query, (err, foundUser) => {
            if (err) {
                console.log(err);
                callback(err, null);
            }
            if (foundUser && foundUser.isAdmin) {
                callback(null, true);
            } else {
                callback(null, false);
            }
        });
    } catch (error) {
        console.error(error);
        callback(error, null);
    }

}

module.exports = {checkIfUserExists, checkIfUserIsAdmin};