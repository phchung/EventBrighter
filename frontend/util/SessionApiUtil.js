var apiUtil = require('./apiUtils'),
    SessionAction = require('../actions/SessionAction')

var SessionApiUtil = {
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
        console.log("SessionApiUtil LOGOUT ERROR")
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

module.exports = SessionApiUtil
