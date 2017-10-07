'use strict';
var mongoose = require('mongoose');
var Schedule = mongoose.model('Schedules');



exports.create_a_schedule = function(req, res) {
  var new_schedule = new Schedule(req.body);
  new_schedule.save(function(err, schedule) {
    if (err){res.send(err);}

    res.json(schedule);
  });
};


exports.read_a_schedule = function(req, res) {
  Schedule.findById(req.params.id, function(err, schedule) {
    if (err){res.send(err);}

    res.json(schedule);
  });
};


exports.update_a_schedule = function(req, res) {
  Schedule.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, schedule) {
    if (err){res.send(err);}

    res.json({message: "Schedule updated.",schedule});
  });
};


exports.delete_a_schedule = function(req, res) {
  Schedule.remove({
    _id: req.params.id
  }, function(err, schedule) {
    if (err){res.send(err);}
    res.json({ message: 'Schedule successfully deleted' });
  });
};
