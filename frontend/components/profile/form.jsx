var React = require('react'),
    EventIndexItem = require('../event/event_index_item')

var Form = React.createClass({

  render: function(){
    return(
      <div className="profile-show">
        {this.props.events.map(function(event,i){
          return <EventIndexItem event={event} key={i}/>
          }
        )}
      </div>
    )
  }
})

module.exports = Form
