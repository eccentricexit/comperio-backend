'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ScheduleSchema = new Schema({
  type: {
    type: String,
    required: 'Type of schedule required (teach or learn).'
  },
  userId: {
    type: String,
    required: 'User id.'
  },
  subject: {
    type: String,
    required: 'Subject required'
  },
  startTime: {
    type: Number,
    required: 'Start time required.'
  },
  endTime: {
    type: Number,
    required: 'End time required.'
  }
});

module.exports = mongoose.model('Schedules', ScheduleSchema);
