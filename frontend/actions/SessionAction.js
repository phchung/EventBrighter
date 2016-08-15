var Dispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/session_constants'),
    SessionApiUtil = require('../util/SessionApiUtil'),
    ErrorAction = require('./ErrorAction'),
    hashHistory = require('react-router').hashHistory,
    apiUtil = require('../util/apiUtils'),
    ServerAction = require('./ServerAction')

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
    hashHistory.push('/')
    apiUtil.fetchBookmarks()
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    })
    hashHistory.push('/')
    ServerAction.clearBookmarks()
  }
}

module.exports = SessionAction
