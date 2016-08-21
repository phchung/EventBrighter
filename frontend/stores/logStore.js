var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    LogConstants = require('../constants/logConstants')

var _modalState = false;

var LogStore = new Store(Dispatcher)

LogStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case LogConstants.OPEN_LOG_FORM:
    LogStore.openLogForm();
    this.__emitChange()
    break;

    case LogConstants.CLOSE_LOG_FORM:
    LogStore.closeLogForm();
    this.__emitChange()
    break
  }
}

LogStore.openLogForm = function() {
  _modalState = true;
};

LogStore.closeLogForm = function() {
  _modalState = false;
};

LogStore.modalState = function() {
  var state = _modalState;
  return state;
};

module.exports = LogStore
