var React = require('react'),
    Map = require('./map'),
    EventStore = require('../../stores/event'),
    EventIndexItem = require('../event/event_index_item'),
    ClientActions = require('../../actions/ClientAction')


var Search = React.createClass({

  getInitialState: function(){
    return({location:"",
      category:"All Category",
      date:"All Dates",
      events: EventStore.all()
    })
  },

  componentDidMount: function(){
    this.eventListener = EventStore.addListener(this.__onChange)
  },

  componentWillUnmount: function(){
    this.eventListener.remove()
  },

  filter: function(property){
    return (e) => this.setState({[property]: e.target.value})
  },

  __onChange(){
    this.setState({events:EventStore.all()})
  },

  render: function(){
    const events = this.state.events
    const category = this.state.category
    const date = this.state.date
    return(
      <div className="search-page">
        <div className="search-left">
          <Map events={this.state.events} date={this.state.date}
            category={this.state.category}/>
          <input id="pac-input" class="controls" type="text" placeholder="Search City"/>
          <div className="category-search">
            <select className="form-control input-lrg" onChange={this.filter("category")}>
              <option value="" disabled selected>CATEGORY</option>
              <option>All Category</option>
              <option>Art</option>
              <option>Music</option>
              <option>Food & Drink</option>
              <option>Science & Tech</option>
              <option>Health</option>
              <option>Travel & Outdoor</option>
              <option>Fashion</option>
              <option>Sports & Fitness</option>
              <option>Business</option>
              <option>Hobbies</option>
            </select>
          </div>
          <div className="date-search">
            <select className="form-control input-lrg" onChange={this.filter("date")}>
              <option value="" disabled selected>DATE</option>
              <option>All Dates</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>
        </div>
        <div className="search-right">
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

module.exports = Search;
