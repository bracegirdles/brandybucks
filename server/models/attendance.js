var db = require('../config');

var Attendance = db.Model.extend({
  tableName: 'attendance_data',
  hasTimestamps: true,
});

module.exports = Attendance;