'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Name required.'
  },
  username: {
    type: String,
    required: 'Username required'
  },
  password: {
    type: String,
    required: 'Password required.'
  },
});

module.exports = mongoose.model('Users', UserSchema);
