var Dispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/session_constants'),
    SessionApiUtil = require('../util/SessionApiUtil'),
    ErrorAction = require('./ErrorAction')
    hashHistory = require('react-router').hashHistory

var SessionAction = {

  logIn: function(user){
    SessionApiUtil.logIn(user,SessionAction.receiveCurrentUser,ErrorAction.setErrors)
  },

  logOut: function(){
    SessionApiUtil.logOut(SessionAction.removeCurrentUser)
  },

  signUp: function(user){
    SessionApiUtil.signUp(user,SessionAction.receiveCurrentUser,ErrorAction.setErrors)
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
    hashHistory.push('/')
  }
}

module.exports = SessionAction
