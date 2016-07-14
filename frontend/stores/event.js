var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    EventConstants = require('../constants/event_constants')

_events = {}
var EventStore = new Store(Dispatcher)


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

EventStore.resetEvents = function(events){
  _events = events
}

EventStore.find = function(id){
  return Object.assign({},_events[id])
}

module.exports = EventStore
