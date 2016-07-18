var React = require('react'),
    hashHistory = require('react-router').hashHistory,
    BookmarkStore  = require('../../stores/bookmark'),
    ApiUtil = require('../../util/apiUtils'),
    SessionStore = require('../../stores/session')

var EventIndexItem = React.createClass({

  getInitialState: function(){
    return({
      start_time:"",
      parsedDate:"",
      bookmark: false
    })
  },

  componentDidMount: function(){
    this.bookmarkListener = BookmarkStore.addListener(this._bookmarkChanged)
    this._setDatetime()
    ApiUtil.fetchBookmarks()
  },

  componentWillUnmount: function(){
    this.bookmarkListener.remove()
  },

  _bookmarkChanged: function(){
    const eventId = this.props.event.id
    this.setState({bookmark: BookmarkStore.includes(eventId)})
  },

  _handleBookmark: function(){
    const eventId = this.props.event.id
    const currentUser = SessionStore.currentUser().id
    const bookmark = Object.assign({},{bookmark_id: eventId, user_id: currentUser})
    if(this.state.bookmark){
      ApiUtil.deleteBookmark(bookmark)
    } else {
      ApiUtil.createBookmark(bookmark)
    }
  },

  _handleClick: function(){
    hashHistory.push('/events/' + this.props.event.id)
  },

  _setDatetime(){
    parsedStartDate = new Date(this.props.event.start_date).toString().split(" ")
    start_date = []
    for(i=0;i<3;i++){
      start_date.push(parsedStartDate[i])
    }
    datehold = start_date.join(', ').slice(0,8) + start_date.join(', ').slice(9,18)
    this.setState({parsedDate:datehold})
    parsedTime = this.props.event.start_time.split("T")[1].split("")
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

  render: function(){
    const event = this.props.event
    let bookmark
    if(this.state.bookmark){
      bookmark = <span onClick={this._handleBookmark}
                  className="glyphicon glyphicon-tag footer marked" ></span>
    } else {
      bookmark = <span onClick={this._handleBookmark}
                  className="glyphicon glyphicon-tag footer" ></span>
    }

    return(
      <div className="event-index-item">
        <img id="home-event-index-picture"onClick={this._handleClick}
          src={event.picture_url}/>
        <div className="index-detail" onClick={this._handleClick}>
          <div className="index-datetime">
            {this.state.parsedDate} {this.state.start_time}
          </div>
          <div className="index-title">
            {event.title}
          </div>
          <div className="index-location">
            {event.location}
          </div>
        </div>
        <div className="index-footer">
          <div className="index-category footer">#{event.category}</div>
          {bookmark}
        </div>
      </div>
    )
  }
})

module.exports = EventIndexItem;
