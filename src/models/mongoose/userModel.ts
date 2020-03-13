import bcrypt from 'bcrypt';
import authConfig from '../../config/auth/authConfig';

const getUserModel = mongoose => {
  const { Schema } = mongoose;

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

  // eslint-disable-next-line func-names
  userModel.pre('save', async function(next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    const { saltRounds } = authConfig;
    console.log(`salt rounds: ${saltRounds}`);

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

  // eslint-disable-next-line func-names
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

export default getUserModel;
