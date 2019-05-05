var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean
    }
});

// eslint-disable-next-line consistent-return
userModel.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) {
        return next;
    }

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) {
            return next(err);
        }

        console.log('Hashed password: ' + hash);
        user.password = hash;
        return next();
    });

});

module.exports = mongoose.model('user', userModel);