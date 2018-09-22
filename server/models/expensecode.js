var mongoose = require('mongoose');

var expensecodeSchema = new mongoose.Schema({
  divisionsectionCode: String,
  expenseCode: String,
  expenseName: String
});

var Expensecode = mongoose.model('Expensecode', expensecodeSchema);

module.exports = {Expensecode};
