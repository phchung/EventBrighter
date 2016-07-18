var ApiUtil = require('../util/apiUtils'),
    ErrorAction = require('./ErrorAction')

var ClientAction = {

  createEvent: function(event){
    ApiUtil.createEvent(event,ErrorAction.setErrors)
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

module.exports = ClientAction;
