var serverActions = require('../actions/serverAction')

var ApiUtils = {
  createEvent: function(event,error){
    $.ajax({
      url: '/api/events',
      method: 'POST',
      dataType: 'json',
      data: event,
      success: function(event){
        serverActions.createEvent(event)
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
          serverActions.fetchEvents(events)
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
        serverActions.createTicket(ticket)
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
        serverActions.fetchTickets(tickets)
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
        serverActions.createBookmark(bookmark)
      }
    })
  },

  fetchBookmarks: function(){
    $.ajax({
      url: '/api/bookmarks',
      method: 'GET',
      dataType: 'json',
      success: function(bookmarks){
        serverActions.fetchBookmarks(bookmarks)
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
        serverActions.removeBookmark(bookmark)
      }
    })
  }
}

module.exports = ApiUtils
