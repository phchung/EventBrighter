var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    SessionConstants = require('../constants/session_constants')

_currentUserFetched = false
_currentUser = {}

var SessionStore = new Store(Dispatcher)

SessionStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case SessionConstants.LOGIN:
    _login(payload.user)
    this.__emitChange()
    break;

    case SessionConstants.LOGOUT:
    _logout()
    this.__emitChange()
    break;
  }
}

_login = function(user){
  _currentUser = user
  _currentUserFetched = true
}

_logout = function(){
  _currentUser = {}
  _currentUserFetched = false
}

SessionStore.currentUser = function(){
  return Object.assign({},_currentUser)
}

SessionStore.currentUserHasBeenFetched = function(){
  return !!_currentUserFetched
}

SessionStore.isUserLoggedIn = function(){
  return !!_currentUser.id
}

module.exports = SessionStore
