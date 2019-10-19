const objectId = require('mongodb').ObjectId;

function checkIfUserExists(userModel, userId, callback) {

  try {
    const id = new objectId(userId);

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

function checkIfUserIsAdmin(userModel, userId, callback) {

  try {
    const id = new objectId(userId);

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

module.exports = {checkIfUserExists, checkIfUserIsAdmin};
