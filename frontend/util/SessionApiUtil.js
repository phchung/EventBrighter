

var SessionApiUtil = {
  logIn(user,success){
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: {user},
      success,
      error(xhr){
        errors = xhr.responseJSON
      }
    })
  },

  logOut(success){
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success,
      error: function(){
        console.log("SessionApiUtil LOGOUT ERROR")
      }
    })
  },

  signUp(user,success){
    $.ajax({
      url: 'api/user',
      type: 'POST',
      data: {user},
      success,
      error:function(){
        console.log("SessionApiUtil SIGNUP ERROR")
      }
    })
  },

  fetchCurrentUser(success){
    $.ajax({
      url: 'api/session',
      type: 'GET',
      success
    })
  }
}

module.exports = SessionApiUtil
