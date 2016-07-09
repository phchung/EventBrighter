var React = require('react'),
    ErrorConstants = require('../constants/error_constants'),
    Dispatcher = require('../dispatcher/dispatcher')

var ErrorAction = {

  setErrors: function(form,error){
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERROR,
      error: error,
      form: form
    })
  },

  clearErrors: function(){
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    })
  }
}

module.exports = ErrorAction
