var db = require('../config');

var InterestAndEngagement = db.Model.extend({
  tableName: 'interest_and_engagement_data',
  hasTimestamps: true,
});

module.exports = InterestAndEngagement;