var mongoose = require('mongoose');

var subSchema = new mongoose.Schema({
  landboardCode: String,
  subCode: String,
  subName: String
});

var Sub = mongoose.model('Sub', subSchema);

module.exports = {Sub};
