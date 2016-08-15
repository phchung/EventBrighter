var React = require('react'),
    BookmarkStore  = require('../../stores/bookmark'),
    ApiUtil = require('../../util/apiUtils'),
    SessionStore = require('../../stores/session')

var Bookmark = React.createClass({

  getInitialState: function(){
    return ({bookmark: false})
  },

  componentDidMount: function(){
    this.bookmarkListener = BookmarkStore.addListener(this._bookmarkChanged)
    if(SessionStore.isUserLoggedIn()){
      ApiUtil.fetchBookmarks()
    }
  },

  componentWillUnmount: function(){
    this.bookmarkListener.remove()
  },

  _bookmarkChanged: function(){
    const eventId = this.props.eventId
    this.setState({bookmark: BookmarkStore.includes(eventId)})
  },

  _handleBookmark: function(){
    const eventId = this.props.eventId
    const currentUser = SessionStore.currentUser().id
    const bookmark = Object.assign({},{bookmark_id: eventId, user_id: currentUser})
    if(SessionStore.isUserLoggedIn()){
      if(this.state.bookmark){
        ApiUtil.deleteBookmark(bookmark)
      } else {
        ApiUtil.createBookmark(bookmark)
      }
    }
  },

  render: function(){
    let bookmark
    if(this.state.bookmark){
      bookmark = <span onClick={this._handleBookmark}
                  className="glyphicon glyphicon-tag marked" ></span>
    } else {
      bookmark = <span onClick={this._handleBookmark}
                  className="glyphicon glyphicon-tag " ></span>
    }
    return(
      <div className="bookmark-index">{bookmark}</div>
    )
  }
})

module.exports = Bookmark
