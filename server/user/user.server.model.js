/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  email: { type: String },
 
});


UserSchema.statics = {

  /**
   * get
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
    get: function(id, callback) {
        this.find({}, callback);
    },
    /**
     * create
     *
     * @param {Object} options
     * @param {Function} cb
     * @api private
     */
    create: function(data, callback) {
        var user = new this(data);
        user.save(callback);
    }
}

var user = mongoose.model('User', UserSchema);

/** export schema */
module.exports = {
    User: user
};

