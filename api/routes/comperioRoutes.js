'use strict';
module.exports = function(app) {
  var schedules = require('../controllers/scheduleController');

  // schedule Routes
  app.route('/v1/schedules')
    .post(schedules.create_a_schedule);

  app.route('/v1/schedules')
    .get(schedules.find_schedules);

  app.route('/v1/schedules/:id')
    .get(schedules.read_a_schedule)
    .put(schedules.update_a_schedule)
    .delete(schedules.delete_a_schedule);
};
