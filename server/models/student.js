var db = require('../config');
var Student = db.Model.extend({

  tableName: 'students',

});

module.exports = Student;
