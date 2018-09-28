'use strict';

const express = require('express');
const app = express();

var jsonParser = require('body-parser');
var logger = require('morgan');

app.use(jsonParser.urlencoded({ extended: true}));
app.use(jsonParser.json());
app.use(logger('dev'))

//routes
var student= require('./routes/student');
app.use('/student', student);

//Mongoose Init //
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/fid-epi", {useMongoClient: true});
var db = mongoose.connection;
//Leave Open // Handle Errors
db.on('error', console.error.bind(console, 'We are not connected.'));
//Opens once
db.once('open', function(){ console.log("~* You are connected to Mongo! You are GOLDEN *~")});
//End Init //

var port = process.env.PORT || 3000;
app.listen(port, function(){ console.log('~* You are listening on port ' + port + ' *~')});
