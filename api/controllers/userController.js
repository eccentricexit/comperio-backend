'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users');



exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err){res.send(err);}
    delete user.password;
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err){res.send(err);}
    var filteredUser = {};
    filteredUser._id = user._id;
    filteredUser.username = user.username;
    filteredUser.name = user.name;

    res.json(filteredUser);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err){res.send(err);}
    delete user.password;
    res.json({message: "User updated.",user});
  });
};


exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err){res.send(err);}
    res.json({ message: 'User successfully deleted' });
  });
};
