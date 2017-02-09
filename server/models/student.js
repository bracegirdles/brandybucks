var db = require('../config');
var Student = db.Model.extend({

  tableName: 'students',
  hasTimestamps: true,

});

module.exports = Student;