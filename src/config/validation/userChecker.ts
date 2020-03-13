import { ObjectId } from 'mongodb';

// const {ObjectId} = require('mongodb');

export function checkIfUserExists(userModel, userId, callback) {
  try {
    const id = new ObjectId(userId);

    userModel.findById(id, (err, foundUser) => {
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

export function checkIfUserIsAdmin(userModel, userId, callback) {
  try {
    const id = new ObjectId(userId);

    userModel.findById(id, (err, foundUser) => {
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

// module.exports = { checkIfUserExists, checkIfUserIsAdmin };
