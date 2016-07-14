var Dispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/event_constants'),
    TicketConstants = require('../constants/ticket_constants'),
    hashHistory = require('react-router').hashHistory

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
      hashHistory.push('/events/' + event.id)
  },

  createTicket: function(ticket){
    Dispatcher.dispatch({
      actionType: TicketConstants.ATTENDENT_RECEIVED,
      ticket: ticket
    })
  },

  fetchTickets: function(tickets){
    Dispatcher.dispatch({
      actionType: TicketConstants.ATTENDENTS_RECEIVED,
      tickets: tickets
    })
  }
}

module.exports = ServerActions
