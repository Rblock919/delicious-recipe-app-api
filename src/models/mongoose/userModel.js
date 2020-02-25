const bcrypt = require('bcrypt');
const authConfig = require('../../config/auth/authConfig');

const getUserModel = function(mongoose) {
  const Schema = mongoose.Schema;

  const userModel = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // Validation at database level
      // match: /[a-zA-Z]*/, //some reg ex
      required: true,
    },
    isAdmin: {
      type: Boolean,
    },
  });

  userModel.pre('save', async function(next) {
    const user = this;
    const saltRounds = authConfig.saltRounds;

    if (!user.isModified('password')) {
      return next();
    }

    try {
      user.password = await bcrypt.hash(user.password, saltRounds);
      return next();
    } catch (err) {
      console.log(`err ${err}`);
      return next(err);
    }
  });

  userModel.methods.passwordIsValid = async function(password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (err) {
      console.error(`err: ${err}`);
      return false;
    }
  };

  return mongoose.model('user', userModel);
};

module.exports = getUserModel;
