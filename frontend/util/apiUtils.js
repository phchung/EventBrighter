var ServerActions = require('../actions/ServerAction')

var ApiUtils = {
  createEvent: function(event){
    $.ajax({
      url: '/api/events',
      method: 'POST',
      dataType: 'json',
      data: event,
      success: function(event){
        ServerActions.createEvents(event)
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
  }
}

module.exports = ApiUtils
