var LogConstants = require('../constants/log_constants'),
    Dispatcher = require('../dispatcher/dispatcher')

module.exports = {
  openForm: function() {
    Dispatcher.dispatch({
      actionType: LogConstants.OPEN_LOG_FORM
    });
  },

  closeForm: function() {
    Dispatcher.dispatch({
      actionType: LogConstants.CLOSE_LOG_FORM
    });
  }
}
