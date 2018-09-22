var mongoose = require('mongoose');

var subdepartmentSchema = new mongoose.Schema({
  subCode: String,
  subdepartmentCode: String,
  subdepartmentName: String
});

var Subdepartment = mongoose.model('Subdepartment', subdepartmentSchema);

module.exports = {Subdepartment};
