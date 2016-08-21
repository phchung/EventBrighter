var React = require('react'),
    HomeCarousel = require('./homeCarousel'),
    EventIndex = require('../event/eventIndex'),
    EventStore = require('../../stores/event'),
    clientAction = require('../../actions/clientAction')

var Home = React.createClass({

  getInitialState: function(){
    return({
      events: EventStore.all().slice(0,9)
    })
  },

  componentDidMount: function(){
    this.eventListner = EventStore.addListener(this.__eventsChanged)
    clientAction.fetchEvents()
  },

  componentWillUnmount: function(){
    this.eventListner.remove()
  },

  __eventsChanged: function(){
    this.setState({events: EventStore.all().slice(0,9)})
  },

  render: function(){
    return(
      <div className="homepage">
        <HomeCarousel/>
        <EventIndex events={this.state.events} />
      </div>
    )
  }
})

module.exports = Home
