var ApiUtil = require('../util/apiUtils'),
    ErrorAction = require('./ErrorAction')

var ClientAction = {

  createEvent: function(event){
    ApiUtil.createEvent(event,ErrorAction.setErrors)
  },

  fetchEvents: function(data){
    ApiUtil.fetchEvents(data)
  }
}

module.exports = ClientAction;
