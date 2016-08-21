var Dispatcher = require('../dispatcher/dispatcher'),
    Store = require('flux/utils').Store,
    TicketConstants = require('../constants/ticketConstants')


_tickets = {}

var TicketStore = new Store(Dispatcher)

TicketStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case TicketConstants.ATTENDENT_RECEIVED:
    this.resetShow(payload.ticket)
    this.__emitChange()
    break;

    case TicketConstants.ATTENDENTS_RECEIVED:
    this.resetShows(payload.tickets)
    this.__emitChange()
  }
}

TicketStore.resetShows = function(tickets){
  tickets.forEach(function(tickets){
    var purchaser = tickets.purchaser_id
    var show = tickets.show_id
    if(purchaser in _tickets){
      _tickets[purchaser].push(show)
    } else {
      _tickets[purchaser] = [show]
    }
  })
  return _tickets
}

TicketStore.resetShow = function(ticket){
  var purchaser = ticket.purchaser_id
  var show = ticket.show_id
  if(purchaser in _tickets){
    _tickets[purchaser].push(show)
  } else {
    _tickets[purchaser] = [show]
  }
  return _tickets
}

TicketStore.all = function(){
  return _tickets
}

module.exports = TicketStore
