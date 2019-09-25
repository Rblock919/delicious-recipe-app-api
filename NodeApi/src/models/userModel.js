const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth/authConfig');

const userModel = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    // Validation at database level
    // match: /[a-zA-Z]*/, //some reg ex
    required: true
  },
  isAdmin: {
    type: Boolean
  }
});

userModel.pre('save', function (next) {
  const user = this;
  const saltRounds = authConfig.saltRounds;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) {
      return next(err);
    } else {
      console.log('Hashed password: ' + hash);
      user.password = hash;
      return next();
    }
  });

});

userModel.methods.passwordIsValid = function (password) {

  try {
    return bcrypt.compare(password, this.password);
  } catch (err) {
    console.error(err);
  }

};

// userModel.methods.passwordIIsValid = function (password, callback) {
//   const currentPassword = this.password;
//
//   bcrypt.compare(password, currentPassword, (err, isMatch) => {
//
//     if (err) {
//       console.log('Error in bcrypt compare: ' + err);
//       callback(err, null);
//     }
//     if (!isMatch) {
//       callback(null, false);
//     } else {
//       callback(null, true)
//     }
//
//   });
//
// }

module.exports = mongoose.model('user', userModel);
