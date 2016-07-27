var React = require('react'),
    SessionStore = require('../../stores/session'),
    ErrorStore = require('../../stores/error'),
    ErrorAction = require('../../actions/ErrorAction'),
    ClientAction = require('../../actions/ClientAction'),
    hashHistory = require('react-router').hashHistory

var EventForm = React.createClass({

  getInitialState: function(){
    return this.blankattr
  },

  contextTypes: {
        router: React.PropTypes.object.isRequired
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
    end_time:"",
    lat:"",
    lng:""
  },

  addCloudListener: function(){
    var that = this;
    document.querySelectorAll("#upload_widget_opener").forEach(function(widet_opener){
      widet_opener.addEventListener("click", function(e) {
        e.preventDefault()
          cloudinary.openUploadWidget({ cloud_name: 'du8uwloft', upload_preset: 'rsktbl1s'},
            function(error, result) {
              if(result){
                that.setPictureUrl(result)} else{
                  alert('Error Uploading Picture')
                }
             });
      }, false)})
  },

  setPictureUrl: function(result){
    this.setState ({picture_url: result[0].url})
  },

  componentDidMount: function(){
    this.sessionStore = SessionStore.addListener(this.addUser)
    this.errorStore = ErrorStore.addListener(this.forceUpdate.bind(this))
    ErrorAction.clearErrors()
    this.addCloudListener()
    this.setState(this.blankattr)
  },

  addUser: function(){
    this.setState({user_id: _currentUser.id})
  },

  componentWillUnmount: function(){
    this.sessionStore.remove()
    this.errorStore.remove()
  },

  componentWillReceiveProps: function(){
    this.setState({user_id: _currentUser.id})
  },

  fieldErrors: function(property){
    if(!_errors[0]){return}
     _errors.map(function(error,i){
      if(error.includes(property)){
        if(property === "date" || property === "time"){
           message = "PLEASE INPUT A VALID DATE/TIME"
        } else {
           message = error
        }
      }})
    return <div className="event-error">{message}</div>
  },

  geocodeAddress: function(geocoder){
    var address = document.getElementById('location').value
    var that = this;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        var lat = results[0].geometry.location.lat()
        var lng = results[0].geometry.location.lng()
        that.state.lat = lat
        that.state.lng = lng
        ClientAction.createEvent({event:Object.assign({},that.state)})
     } else {
      ClientAction.createEvent({event:Object.assign({},that.state)})
     }
    })
  },

  handleCancel: function(){
    this.context.router.push("/")
  },

  update: function(property){
    return (e) => this.setState({[property]: e.target.value})
  },

  handleSubmit: function(e){
    e.preventDefault()
    var geocoder = new google.maps.Geocoder();
    this.geocodeAddress(geocoder)
  },

  render: function(){
    let image;
    if(this.state.picture_url){
      image = <div className="image-container not-active">
              <img className="inner-image " src={this.state.picture_url}/>
              </div>
      trashcan = <span className="glyphicon glyphicon-trash">Remove</span>
    } else{
      image = <div id="upload_widget_opener" className="image-container">
                <div className="inner-image-container">
                  <div className="camera-text">
                    <span className="glyphicon glyphicon-camera"></span>
                    <a id="add-event-image">ADD EVENT IMAGE</a>
                    <a id="choose-an-image">Choose an image that captures your event</a>
                  </div>
                </div>
              </div>
      trashcan = <div></div>
    }
    return(
      <div className="event-page">
        <div className="event-header">
          <div className="event-title">
            <a>Create An Event</a>
          </div>
          <div className="event-header-listing">
            <a id="event-live-btn" onClick={this.handleSubmit}
              className="btn btn-primary">Make Event Live</a>
            <a onClick={this.handleCancel}
              id="event-cancel-btn" className="btn btn-primary btn-outline">Cancel</a>
          </div>
        </div>
        <form className="event-form" onSubmit={this.handleSubmit}>
          <label className="title">Event Title</label>
          <input
            type="text"
            value ={this.state.title}
            className="form-control"
            placeholder="Give it a short distinct name"
            onChange={this.update("title")}/>
          {this.fieldErrors('Title')}
          <label className="location">Location</label>
          <input
            id="location"
            type="text"
            value={this.state.location}
            className="form-control"
            placeholder="Specify where is it held"
            onChange={this.update("location")}/>
          {this.fieldErrors('Location')}
          <div className="startend-datetime group">
            <div className="start-datetime">
              <div className="start-label">
                <label className="start_time">Start</label>
              </div>
              <div className="start-input right">
                <input
                  type="date"
                  className="input-lrg"
                  value={this.state.start_date}
                  onChange={this.update("start_date")}/>
                <input
                  type="time"
                  className="input-lrg"
                  value={this.state.start_time}
                  onChange={this.update("start_time")}/>
              </div>
            </div>
            <div className="end-datetime">
              <div className="end-label">
                <label className="start_time">End</label>
              </div>
              <div className="end-input">
                <input
                  type="date"
                  className="input-lrg"
                  value={this.state.end_date}
                  onChange={this.update("end_date")}/>
                <input
                  type="time"
                  className="input-lrg"
                  value={this.state.end_time}
                  onChange={this.update("end_time")}/>
              </div>
            </div>
          </div>
          <a className="picture_url" href="#" id="upload_widget_opener">Event Image</a>
          {image}
          {trashcan}
          {this.fieldErrors('Picture')}
          <label className="description">Event Description</label>
          <textarea
            class="form-control"
            value={this.state.description}
            rows="7"
            onChange={this.update("description")}/>
          {this.fieldErrors('Description')}
          <div className="category-price group">
            <div className="category">
              <div className="category-label">
                <label className="category">Category</label>
              </div>
              <div className="category-price-input right">
                <select className="form-control input-lrg" onChange={this.update("category")}>
                  <option value="" disabled selected>Select the type of event</option>
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
              {this.fieldErrors('Category')}
            </div>
            <div className="price">
              <div className="price-label">
                <label className="price end_time">Price</label>
              </div>
              <span class="currencyinput">$ </span>
              <input
                type="number"
                className="input-lrg"
                value={this.state.price}
                onChange={this.update("price")}/>
              {this.fieldErrors('Price')}
            </div>
          </div>
          <a id="event-live-btn" className="btn btn-primary bottom-btn"
            onClick={this.handleSubmit}>Make Your Event Live</a>
        </form>
      </div>
    )
  }
})

module.exports = EventForm;
