var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    ErrorConstants = require('../constants/error_constants')

var ErrorStore = new Store(Dispatcher)

_errors = {}
_form = ""

_setErrors = function(payload){
  _errors = payload.error
  _form = payload.form
}
ErrorStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case ErrorConstants.SET_ERROR:
    _setErrors(payload)
    this.__emitChange()
  }
}

ErrorStore.formErrors = function(form){
  if (form !== _form){
    return {}
  }

  result ={}
  for (let field in _errors) {
      result[field] = Array.from(_errors[field]);
    }
    return result;
}

ErrorStore._form = function(){
  return _form
}

module.exports = ErrorStore
