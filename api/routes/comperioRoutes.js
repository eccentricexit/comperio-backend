'use strict';
module.exports = function(app) {
  var users = require('../controllers/userController');
  var schedules = require('../controllers/scheduleController');

  // user Routes
  app.route('/v1/users')
    .post(users.create_a_user);


  app.route('/v1/users/:id')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);


  // schedule Routes
  app.route('/v1/schedules')
    .post(schedules.create_a_schedule);


  app.route('/v1/schedules/:id')
    .get(schedules.read_a_schedule)
    .put(schedules.update_a_schedule)
    .delete(schedules.delete_a_schedule);

};
