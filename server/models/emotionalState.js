var db = require('../config');

var EmotionalState = db.Model.extend({
  tableName: 'emotional_state_data',
  hasTimestamps: true,
});

module.exports = EmotionalState;