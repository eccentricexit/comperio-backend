'use strict';
var mongoose = require('mongoose');
var Schedule = mongoose.model('Schedules');


exports.create_a_schedule = function(req, res) {
  req.body.loc = req.body.loc.split(',').map(Number);
  var new_schedule = new Schedule(req.body);
  new_schedule.save(function(err, schedule) {
    if (err) {
      res.send(err);
    }

    res.json(schedule);
  });
};

exports.find_schedules = function(req, res) {
  if (req.query.length === 0) {
    Schedule.find(function(err, docs) {
      if (err) {
        res.send(err);
        return;
      }
      res.json(docs);
    });
    return;
  }

  var mDistance = req.query.distance || 8; //in kilometers

  var coords = [];
  coords[0] = Number(req.query.longitude);
  coords[1] = Number(req.query.latitude);

  var qry = Schedule.find();
  qry.where('loc').near({
    center: {
      type: 'Point',
      coordinates: coords
    },
    maxDistance: mDistance * 1000
  });
  //qry.where('name').equals('Alice');

  qry.exec(function(err, docs) {
    if (err) {
      return res.send(err);
    }
    res.json(docs);
  });

};


exports.read_a_schedule = function(req, res) {
  Schedule.findById(req.params.id, function(err, schedule) {
    if (err) {
      res.send(err);
    }

    res.json(schedule);
  });
};


exports.update_a_schedule = function(req, res) {
  Schedule.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, function(err, schedule) {
    if (err) {
      res.send(err);
    }

    res.json({
      message: "Schedule updated.",
      schedule
    });
  });
};


exports.delete_a_schedule = function(req, res) {
  Schedule.remove({
    _id: req.params.id
  }, function(err, schedule) {
    if (err) {
      res.send(err);
    }
    res.json({
      message: 'Schedule successfully deleted'
    });
  });
};
