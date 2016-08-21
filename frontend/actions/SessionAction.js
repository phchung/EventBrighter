var Dispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/sessionConstants'),
    sessionApiUtil = require('../util/sessionApiUtil'),
    errorAction = require('./errorAction'),
    hashHistory = require('react-router').hashHistory,
    apiUtil = require('../util/apiUtils'),
    serverAction = require('./serverAction')

var sessionAction = {

  logIn: function(user){
    sessionApiUtil.logIn(user,sessionAction.receiveCurrentUser,errorAction.setErrors)
  },

  logOut: function(){
    sessionApiUtil.logOut(sessionAction.removeCurrentUser)
  },

  signUp: function(user){
    sessionApiUtil.signUp(user,sessionAction.receiveCurrentUser,errorAction.setErrors)
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
    serverAction.clearBookmarks()
  }
}

module.exports = sessionAction
