var apiUtil = require('./apiUtils'),
    sessionAction = require('../actions/sessionAction')

var sessionApiUtil = {
  logIn: function(user,success,error){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: {user},
      success,
      error(xhr){
        errors = xhr.responseJSON
        error("login",errors)
      }
    })
  },

  logOut: function(success){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success,
      error: function(){
        console.log("sessionApiUtil LOGOUT ERROR")
      }
    })
  },

  signUp: function(user,success,error){
    $.ajax({
      url: 'api/user',
      type: 'POST',
      data: {user},
      success,
      error(xhr){
        errors = xhr.responseJSON
        error("signup",errors)
      }
    })
  },

  fetchCurrentUser: function(success){
    $.ajax({
      url: 'api/session',
      type: 'GET',
      success
    })
  }
}

module.exports = sessionApiUtil
