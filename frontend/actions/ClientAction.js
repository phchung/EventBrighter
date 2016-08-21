var ApiUtil = require('../util/apiUtils'),
    errorAction = require('./errorAction')

var clientAction = {

  createEvent: function(event){
    ApiUtil.createEvent(event,errorAction.setErrors)
  },

  fetchEvents: function(data){
    ApiUtil.fetchEvents(data)
  },

  createTicket: function(data){
    ApiUtil.createTicket(data)
  },

  fetchTickets: function(data){
    ApiUtil.fetchTickets(data)
  },

  createBookmark: function(data){
    ApiUtil.createBookmark(data)
  },

  fetchBookmarks: function(data){
    ApiUtil.fetchBookmarks(data)
  }
}

module.exports = clientAction;
