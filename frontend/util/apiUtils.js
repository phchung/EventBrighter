var ServerActions = require('../actions/ServerAction')

var ApiUtils = {
  createEvent: function(event,error){
    $.ajax({
      url: '/api/events',
      method: 'POST',
      dataType: 'json',
      data: event,
      success: function(event){
        ServerActions.createEvents(event)
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
  }
}

module.exports = ApiUtils
