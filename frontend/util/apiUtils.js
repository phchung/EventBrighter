var ServerActions = require('../actions/ServerAction')

var ApiUtils = {
  createEvent: function(event,error){
    $.ajax({
      url: '/api/events',
      method: 'POST',
      dataType: 'json',
      data: event,
      success: function(event){
        ServerActions.createEvent(event)
      },
      error(xhr){
        errors = xhr.responseJSON
        error("Create Event",errors)
      }
    })
  },

  fetchEvents: function(data){
    $.ajax({
      url: '/api/events',
      method: 'GET',
      dataType: 'json',
      data: data,
      success: function(events){
        ServerActions.fetchEvents(events)
      }
    })
  },

  createTicket: function(data){
    $.ajax({
      url: '/api/relationships',
      method: 'POST',
      dataType: 'json',
      data: data,
      success: function(ticket){
        ServerActions.createTicket(ticket)
      }
    })
  },

  fetchTickets: function(data){
    $.ajax({
      url: '/api/relationships',
      method: 'GET',
      dataType: 'json',
      data: data,
      success: function(tickets){
        ServerActions.fetchTickets(tickets)
      }
    })
  }
}

module.exports = ApiUtils
