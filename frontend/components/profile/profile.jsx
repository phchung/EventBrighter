var React = require('react'),
    SessionStore = require('../../stores/session'),
    Form = require('./form'),
    hashHistory = require('react-router').hashHistory,
    EventStore = require('../../stores/event'),
    ApiUtil = require('../../util/apiUtils'),
    EventIndexItem = require('../event/event_index_item'),
    BookmarkStore = require('../../stores/bookmark'),
    ServerAction = require('../../actions/ServerAction')

var Profile = React.createClass({

  getInitialState: function(){
    return({
      upcomingEvents: EventStore.upcomingEvents(),
      bookmarks: "",
      category: "UPCOMING EVENTS"
    })
  },

  componentDidMount: function(){
    this.eventListener = EventStore.addListener(this.__eventChanged)
    ApiUtil.fetchEvents({ticketed_shows: true},ServerAction.fetchUpcomingEvents)
    this.setBookmarks()
  },

  componentWillUnmount: function(){
    this.eventListener.remove()
  },

  __eventChanged: function(){
    this.setState({upcomingEvents:EventStore.upcomingEvents()})
  },

  setBookmarks: function(){
    var array = []
    EventStore.all().forEach(function(event){
      if(BookmarkStore.all().includes(event.id)){
        array.push(event)
      }
    })
    this.setState({bookmarks: array})
  },

  _handleForm: function(e){
    var a = e.target.innerHTML
    this.setState({category:e.target.innerHTML})
  },

  render: function(){

    username = SessionStore.currentUser().username
    let show
    if(this.state.category === "UPCOMING EVENTS"){
      show = <Form events={this.state.upcomingEvents }/>
      highlight1 = "grey"
      highlight2 = ""
    } else if(this.state.category === "SAVED EVENTS"){
      show = <Form events={this.state.bookmarks}/>
      highlight1 = ""
      highlight2 = "grey"
    }

    return(
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-name">{username}</div>
          <div className="grid">
            <div>
              <div id="profile-number" className={highlight1}>{this.state.upcomingEvents.length}</div>
              <div className={highlight1} onClick={this._handleForm}>UPCOMING EVENTS</div>
            </div>
            <div>
              <div id="profile-number" className={highlight2}>{this.state.bookmarks.length}</div>
              <div className={highlight2} onClick={this._handleForm}>SAVED EVENTS</div>
            </div>
          </div>
        </div>
      {show}
    </div>
    )
  }
})

module.exports = Profile
