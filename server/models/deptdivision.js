var mongoose = require('mongoose');

var deptdivisionSchema = new mongoose.Schema({
  subdepartmentCode: String,
  deptdivisionCode: String,
  deptdivisonName: String
});

var Deptdivision = mongoose.model('Deptdivision', deptdivisionSchema);

module.exports = {Deptdivision};
