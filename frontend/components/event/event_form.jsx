var React = require('react'),
    SessionStore = require('../../stores/session')

var EventForm = React.createClass({

  getInitialState: function(){
    return this.blankattr
  },

  blankattr:{
    title: "",
    location: "",
    picture_url:"",
    description:"",
    category:"",
    price:"",
    start_date:"",
    end_date:"",
    start_time:"",
    end_time:""
  },

  componentDidMount: function(){
    this.sessionStore = SessionStore.addListener(this.addUser)
  },

  componentWillUnmount: function(){
    this.sessionStore.remove()
  },

  componentWillReceiveProps: function(){
    this.setState({user_id: _currentUser.id})
  },

  handleSubmit: function(){
    this.setState(this.blankattr)
  },

  update: function(property){
    return (e) => this.setState({[property]: e.target.value})
  },

  render: function(){
    return(
      <div>

        <div className="event-header">
          <div className="event-title">
            <a>Create An Event</a>
          </div>
          <div className="event-header-listing">
            <a>Save</a>
            <a>Make Event</a>
          </div>
        </div>

        <form className="event-form" onSubmit={this.handleSubmit}>
          <label className="title">Title:</label>
          <input
            type="text"
            value ={this.state.title}
            onChange={this.update("title")}/>
          <br/>
          <label className="location">Location:</label>
          <input
            type="text"
            value={this.state.location}
            onChange={this.update("location")}/>
          <br/>
          <label className="picture_url">picture_url:</label>
          <input
            type="text"
            value={this.state.picture_url}
            onChange={this.update("picture_url")}/>
          <br/>
          <label className="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.update("description")}/>
          <br/>
          <label className="category">Category:</label>
          <input
            type="text"
            value={this.state.category}
            onChange={this.update("category")}/>
          <br/>
          <label className="price">Price:</label>
          <input
            type="integer"
            value={this.state.price}
            onChange={this.update("price")}/>
          <br/>
          <label className="start_date">Start Date:</label>
          <input
            type="text"
            value={this.state.start_date}
            onChange={this.update("start_date")}/>
          <br/>
          <label className="end_date">End Date:</label>
          <input
            type="text"
            value={this.state.end_date}
            onChange={this.update("end_date")}/>
          <br/>
          <label className="start_time">Start Time:</label>
          <input
            type="text"
            value={this.state.start_time}
            onChange={this.update("start_time")}/>
          <br/>
          <label className="end_time">End Time:</label>
          <input
            type="text"
            value={this.state.end_time}
            onChange={this.update("end_time")}/>
          <br/>
          <input type="submit" value="Create Event"></input>
        </form>

      </div>
    )
  }
})

module.exports = EventForm;
