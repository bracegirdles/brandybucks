var db = require('../config');

var Maturity = db.Model.extend({
  tableName: 'maturity_data',
  hasTimestamps: true,
});

module.exports = Maturity;