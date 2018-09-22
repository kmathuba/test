var mongoose = require('mongoose');

var divisionsectionSchema = new mongoose.Schema({
  deptdivisionCode: String,
  divisionsectionCode: String,
  divisionsectionName: String
});

var Divisionsection = mongoose.model('Sub', divisionsectionSchema);

module.exports = {Divisionsection};
