var mongoose = require('mongoose');

var budgetSchema = new mongoose.Schema({
  ministry: {
    ministryName: String,
    department: {
      departmentName: String,
      landboard: {
        landName: String,
        sub: {
          subName: String,
          department: {
            departmentName: String,
            division: {
              divisionName: String,
              section: {
                sectionName: String,
                expCode: String,
                product: String,
                quantity: Number,
                unitPrice: Number,
                totalPrice: Number,
                dateFrom: Date,
                dateTo: Date,
                expenses: {
                  dated: Date,
                  description: String,
                  amount: Number
                }
              }
            }
          }
        }
      }
    }
  }

});

var Budget = mongoose.model('Budget', budgetSchema);

/*
var budget = new Budget({
  ministry : {
    name : 'Lands and Water Management',
    department: {
      name: 'Corporate',
      landboard: {
        name: 
      }
    }
  }
});

budget.save().then((doc) => {
  console.log(doc);
}, (e) => {
  res.status(400).send(e);
});

*/

module.exports = {Budget}
