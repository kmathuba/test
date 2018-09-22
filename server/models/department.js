var mongoose = require('mongoose');

var departmentSchema = new mongoose.Schema({
  ministryCode: String,
  departmentCode: String,
  departmentName: String 
});

var Department = mongoose.model('Department', departmentSchema);

module.exports = {Department};
