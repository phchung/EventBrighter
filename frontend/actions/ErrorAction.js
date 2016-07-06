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
  }
}

module.exports = ErrorAction
