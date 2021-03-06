var Dispatcher = require('../dispatcher/dispatcher'),
    EventConstants = require('../constants/eventConstants'),
    BookmarkConstants = require('../constants/bookmarkConstants'),
    TicketConstants = require('../constants/ticketConstants'),
    hashHistory = require('react-router').hashHistory

var serverActions = {

  fetchEvents: function(events){
    Dispatcher.dispatch({
      actionType: EventConstants.EVENTS_RECEIVED,
      events: events
    })
  },

  fetchUpcomingEvents: function(events){
    Dispatcher.dispatch({
      actionType: EventConstants.UPCOMING_EVENTS_RECEIVED,
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
  },

  createBookmark: function(bookmark){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARK_RECEIVED,
      bookmark: bookmark
    })
  },

  fetchBookmarks: function(bookmarks){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARKS_RECEIVED,
      bookmarks: bookmarks
    })
  },

  clearBookmarks: function(){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.CLEAR_BOOKMARKS
    })
  },

  removeBookmark: function(bookmark){
    Dispatcher.dispatch({
      actionType: BookmarkConstants.REMOVE_BOOKMARK,
      bookmark: bookmark
    })
  }
}

module.exports = serverActions
