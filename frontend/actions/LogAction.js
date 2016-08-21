var LogApiUtil = require('../util/logApiUtil.js');

var logActions = {
  openForm: function() {
    LogApiUtil.openForm();
  },

  closeForm: function() {
    LogApiUtil.closeForm();
  },
}

module.exports = logActions
