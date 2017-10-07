'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');

  // user Routes
  app.route('/v1/users')
    .post(users.create_a_user);


  app.route('/v1/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);

};
