'use strict';
var mongoose = require('mongoose');
var Schedule = mongoose.model('Schedules');
var admin = require("firebase-admin");
var serviceAccount = require("../comperio-494c9-firebase-adminsdk-3p9fd-c4c60d234d.json");

var topic = "updateDb";

// See the "Defining the message payload" section below for details
// on how to define a message payload.
var payload = {
  data: {
    updateDb: 'true'
  }
};

exports.create_a_schedule = function(req, res) {
  req.body.loc = req.body.loc.split(',').map(Number);
  var new_schedule = new Schedule(req.body);
  new_schedule.save(function(err, schedule) {
    if (err) {res.send(err); return;}

    // Send a message to devices subscribed to the provided topic.
    admin.messaging().sendToTopic(topic, payload)
      .then(function(response) {
        console.log("Successfully sent message:", response);
      })
      .catch(function(error) {
        console.log("Error sending message:", error);
      });

    res.json(schedule);
  });
};

exports.find_schedules = function(req, res) {
  if (!req.query.longitude || !req.query.latitude) {
    Schedule.find(function(err, docs) {
      if (err) {
        res.send(err);
        return;
      }

      //add fake distance
      docs = docs.map(function(doc){
        doc.set('distance',2000,{strict: false});
        return doc;
      });


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

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://comperio-494c9.firebaseio.com/"
});
