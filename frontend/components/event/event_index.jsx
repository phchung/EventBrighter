var React = require('react'),
    EventIndexItem = require('./event_index_item')


var EventIndex = React.createClass({

  render: function(){
    const events = this.props.events
    return(
      <div className="poster-details">
      <div className="poster-title">Events For You</div>
      <div className="poster-display">
        {
          events.map(function(event,i){
            return(
              <EventIndexItem event={event} key={i}/>
            )
          })
        }
      </div>
      </div>
    )
  }
})

module.exports = EventIndex;
