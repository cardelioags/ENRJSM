var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    usuario: String,
    password: String,
})

UserSchema.pre('update', function (){
    var pass = this.getUpdate().$set.password;
    this.update({}, { $set: {password: bcrypt.hashSync(pass, 10)}});
});

UserSchema.pre('save', function (next) {
    this.password = this.encryptPassword(this.password)
    console.log(this.password);
    next();
});




UserSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainPassword) {
        return bcrypt.compareSync(plainPassword, this.password);
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
        if (!password)
            return '';

        return bcrypt.hashSync(password, 10);
    }
};

module.exports = mongoose.model('User', UserSchema);