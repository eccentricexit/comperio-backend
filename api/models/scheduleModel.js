'use strict'
let mongoose = require('mongoose')

let Schema = mongoose.Schema

let ScheduleSchema = new Schema({
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
  }
})

module.exports = mongoose.model('Schedules', ScheduleSchema)
