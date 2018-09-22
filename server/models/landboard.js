var mongoose = require('mongoose');

var landboardSchema = new mongoose.Schema({
  departmentCode: String,
  landboardCode: String,
  landboardName: String 
});

var Landboard = mongoose.model('Landboard', landboardSchema);

module.exports = {Landboard};
