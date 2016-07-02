var Dispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/session_constants'),
    SessionApiUtil = require('../util/SessionApiUtil')

var SessionAction = {

  logIn: function(user){
    SessionApiUtil.logIn(user,SessionAction.receiveCurrentUser)
  },

  logOut: function(){
    SessionApiUtil.logOut(SessionAction.removeCurrentUser)
  },

  signUp: function(user){
    SessionApiUtil.signUp(user,SessionAction.receiveCurrentUser)
  },

  receiveCurrentUser: function(currentUser){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    })
  }
}

module.exports = SessionAction
