var db = require('../config');
var Log = db.Model.extend({

  tableName: 'logs',
  hasTimestamps: true,

});

module.exports = Log;