var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Budget} = require('./models/budget');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(6000, () => {
  console.log('Started on port 6000');
});

module.exports = {app}
