'use strict';
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  teacherName: {
    type: String,
    required: 'name is required'
  },
  teacherPicUrl: {
    type: String,
    required: 'imageUrl is required'
  },
  teacherRating: {
    type: Number,
    required: 'rating is required'
  },
  teacherPhone: {
    type: Number,
    required: 'phoneNumber is required'
  },
  subjectName: {
    type: String,
    required: 'subject is required'
  },
  weekDaysAvailable:{
    type: String,
    required: 'weekdays are required. Format: comma separated numbers 0-6'
  },
  loc: {
    type: [Number],   // [<longitude>, <latitude>]
    index: '2dsphere' // create the geospatial index    
  },
  teachStory: {
    type: String,
    required: 'teachStory is required'
  },
  startMinute: {
    type: Number,
    required: 'startMinute is required'
  },
  endMinute: {
    type: Number,
    required: 'endMinute is required'
  },
  startHour: {
    type: Number,
    required: 'startHour is required'
  },
  endHour: {
    type: Number,
    required: 'endHour is required'
  },
  hourPrice: {
    type: Number,
    required: 'hourPrice is required'
  },
});

module.exports = mongoose.model('Schedules', ScheduleSchema);
