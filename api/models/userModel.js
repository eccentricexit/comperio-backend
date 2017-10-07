'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'name required.'
  },
  username: {
    type: String,
    required: 'username required'
  },
  password: {
    type: String,
    required: 'password required.'
  }
});

module.exports = mongoose.model('Users', UserSchema);
