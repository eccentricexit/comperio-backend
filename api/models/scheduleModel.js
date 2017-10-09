'use strict';
var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema({
  name: {
    type: String,
    required: 'name is required'
  },
  subject: {
    type: String,
    required: 'subject is required'
  },
  imageUrl: {
    type: String,
    required: 'imageUrl is required'
  },
  rating: {
    type: Number,
    required: 'rating is required'
  },
  phoneNumber: {
    type: String,
    required: 'phoneNumber is required'
  },
  weekDaysAvailable:[String],
  loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2d'      // create the geospatial index
  },
  startTime: Number,
  endTime:Number
});

module.exports = mongoose.model('Schedules', ScheduleSchema);
