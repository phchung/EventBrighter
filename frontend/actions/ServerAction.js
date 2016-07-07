var Dispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants')

var ServerActions = {

  fetchEvents: function(events){
    Dispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    })
  },

  createEvent: function(event){
    Dispatcher.dispatch({
      actionType: EventConstants.EVENT_RECEIVED,
      event: event
    })
  }
}
