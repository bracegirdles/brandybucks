var db = require('../config');

var InterpersonalSkills = db.Model.extend({
  tableName: 'interest_and_engagement_data',
  hasTimestamps: true,
});

module.exports = InterpersonalSkills;