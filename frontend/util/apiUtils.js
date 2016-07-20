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

  fetchEvents: function(data,cb){
    $.ajax({
      url: '/api/events',
      method: 'GET',
      dataType: 'json',
      data: data,
      success: function(events){
        if(cb){
          cb(events)
        } else {
          ServerActions.fetchEvents(events)
        }
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
  },

  createBookmark: function(bookmark){
    $.ajax({
      url: '/api/bookmarks',
      method: 'POST',
      dataType: 'json',
      data: {bookmark},
      success: function(bookmark){
        ServerActions.createBookmark(bookmark)
      }
    })
  },

  fetchBookmarks: function(){
    $.ajax({
      url: '/api/bookmarks',
      method: 'GET',
      dataType: 'json',
      success: function(bookmarks){
        ServerActions.fetchBookmarks(bookmarks)
      }
    })
  },

  deleteBookmark: function(bookmark){
    $.ajax({
      url: '/api/bookmarks/' + bookmark.bookmark_id,
      method: "DELETE",
      data: {bookmark},
      dataType: 'json',
      success: function(bookmark){
        ServerActions.removeBookmark(bookmark)
      }
    })
  }
}

module.exports = ApiUtils
