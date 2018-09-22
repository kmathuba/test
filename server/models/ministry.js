var mongoose = require('mongoose');

var ministrySchema = new mongoose.Schema({
  ministryCode: String,
  ministryName: String 
});

var Ministry = mongoose.model('Ministry', ministrySchema);

module.exports = {Ministry};
