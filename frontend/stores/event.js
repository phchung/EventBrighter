var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    EventConstants = require('../constants/event_constants')

_events = {}
_upcomingEvents = {}

var EventStore = new Store(Dispatcher)

_resetUpcomingEvents = function(events){
  _upcomingEvents = events
}

EventStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case EventConstants.EVENT_RECEIVED:
    this.resetEvent(payload.event)
    this.__emitChange()
    break;

    case EventConstants.EVENTS_RECEIVED:
    this.resetEvents(payload.events)
    this.__emitChange()
    break;

    case EventConstants.UPCOMING_EVENTS_RECEIVED:
    _resetUpcomingEvents(payload.events)
    this.__emitChange()
    break;
  }
}

EventStore.resetEvent = function(event){
  _events[event.id] = event
}

EventStore.all = function(){
  var array = []
  for(key in _events){
    if(_events.hasOwnProperty(key)){
    array.push(_events[key])
  }
}
  return array.slice()
}

EventStore.upcomingEvents = function(){
  var array = []
  for(key in _upcomingEvents){
    if(_upcomingEvents.hasOwnProperty(key)){
    array.push(_upcomingEvents[key])
  }
}
  return array.slice()
}

EventStore.resetEvents = function(events){
  _events = events
}

EventStore.find = function(id){
  return Object.assign({},_events[id])
}

module.exports = EventStore
