var React = require('react'),
    EventStore = require('../../stores/event'),
    ClientAction = require('../../actions/ClientAction'),
    SessionStore = require('../../stores/session'),
    TicketStore = require('../../stores/ticket')

var EventShow = React.createClass({

  getInitialState: function(){
    const eventId = this.props.params.eventId
    const event = EventStore.find(eventId) || {}
    return {event:event,attending:false}
  },

  componentDidMount() {
    this.eventListener = EventStore.addListener(this._eventChanged);
    this.ticketListener = TicketStore.addListener(this._ticketChanged);
    ClientAction.fetchEvents()
    ClientAction.fetchTickets()
  },
  componentWillUnmount(){
    this.eventListener.remove()
    this.ticketListener.remove()
  },

  _ticketChanged(){
    const currentUser = SessionStore.currentUser().id
    const eventId = parseInt(this.props.params.eventId)
    const tickets = TicketStore.all()[currentUser]
    if(tickets && tickets.includes(eventId)){
      this.setState ({attending: true})
    }
  },

  _eventChanged() {
   const eventId = this.props.params.eventId;
   const event = EventStore.find(eventId);
   this.setState({ event: event});
   this._setDatetime()
  },

  _setDatetime(){
    parsedStartDate = new Date(this.state.event.start_date).toString().split(" ")
    start_date = []
    for(i=0;i<4;i++){
      start_date.push(parsedStartDate[i])
    }
    datehold = start_date.join(', ').slice(0,8) + start_date.join(', ').slice(9,18)

    this.setState({parsedDate:datehold})

    parsedTime = this.state.event.start_time.split("T")[1].split("")
    timeHolder = []
    for(i=0;i<5;i++){
      timeHolder.push(parsedTime[i])
    }

    hours = parseInt([timeHolder[0],timeHolder[1]].join(''))
    if(Math.floor(hours) > 12){
      timeHolder = Math.floor(hours/12)+ timeHolder[2]+timeHolder[3]+timeHolder[4] + ' PM'
      this.setState({start_time:timeHolder})
    } else {
      this.setState({start_time:timeHolder.join('') + ' AM'})
    }
  },

  createTicket: function(e){
    e.preventDefault()
    const relationship = {show_id:this.state.event.id,purchaser_id:SessionStore.currentUser().id}
    ClientAction.createTicket({relationship})
  },

  render: function(){

    let attending;
    if(this.state.attending === false){
      attending = <button type="button" onClick={this.createTicket}
                  className="btn btn-info tickets"><span>TICKETS</span></button>
    }else{
      attending = <button type="button" className="btn btn-info tickets"
                   disabled><span>ATTENDING</span></button>
    }

    return(
        <div className="event-show">
          <div className="listing-header">
            <div className="listing-title">{this.state.event.title}</div>
            <div className="listing-date listing-group">{this.state.parsedDate} from {this.state.start_time} (PST)</div>
            <div className="listing-location listing-group">{this.state.event.location}</div>
          </div>
          <div className="listing-panel">
            <span className="glyphicon glyphicon-tag bookmark" ></span>
            {attending}
          </div>
          <div className="listing-detail">
            <div>{this.state.event.description}</div>
            <div><img id="event-show-picture"
              src={this.state.event.picture_url}/></div>
        </div>
      </div>
    )
  }
})




module.exports = EventShow
