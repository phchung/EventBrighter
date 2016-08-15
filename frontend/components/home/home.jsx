var React = require('react'),
    HomeCarousel = require('./home_carousel'),
    EventIndex = require('../event/event_index'),
    EventStore = require('../../stores/event'),
    ClientAction = require('../../actions/ClientAction')

var Home = React.createClass({

  getInitialState: function(){
    return({
      events: EventStore.all().slice(0,9)
    })
  },

  componentDidMount: function(){
    this.eventListner = EventStore.addListener(this.__eventsChanged)
    ClientAction.fetchEvents()
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
