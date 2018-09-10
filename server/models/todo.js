var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  text: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number
  }

});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo}
