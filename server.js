var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Schedule = require('./api/models/scheduleModel');
var bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/comperiodb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/comperioRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('comperio RESTful API server started on: ' + port);
