var LogApiUtil = require('../util/log_api_util.js');

var LogActions = {
  openForm: function() {
    LogApiUtil.openForm();
  },

  closeForm: function() {
    LogApiUtil.closeForm();
  },
}

module.exports = LogActions
