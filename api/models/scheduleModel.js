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
  loc: {
    type: [Number],   // [<longitude>, <latitude>]
    index: '2dsphere' // create the geospatial index
  },
  teacherStory: {
    type: String,
    required: 'teacherStory is required'
  },
  hourPrice: {
    type: Number,
    required: 'hourPrice is required'
  },
});

module.exports = mongoose.model('Schedules', ScheduleSchema);
