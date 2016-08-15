var React = require('react'),
    hashHistory = require('react-router').hashHistory,
    SessionStore = require('../../stores/session'),
    LogAction = require('../../actions/LogAction')

var HomeCarousel = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  __handleClick: function(){
    hashHistory.push("create")
  },

  __handleLogin: function(){
    LogAction.openForm()
  },

  render: function(){

    let Click
    if(SessionStore.isUserLoggedIn()){
        Click = this.__handleClick
        button_message = "Create Event"
    } else {
        Click = this.__handleLogin
        button_message = "Get Started"
    }

    return(
      <div id="myCarousel" className="carousel slide" data-interval="3000"
        data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img className="first-slide" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=698b0decc7115d06b16801d7b8291c63"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets</h1>
                  <p>Promote, manage, and host successful events</p>
                  <button  onClick={Click} type="button"
                    className="btn btn-info home-create"><span>{button_message}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="second-slide" src="https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d310b05f9c9d755fe5608e02ed3dc16b"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets</h1>
                  <p>Promote, manage, and host successful events</p>
                  <button  onClick={Click} type="button"
                    className="btn btn-info home-create"><span>Create Event</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="third-slide" src="https://hd.unsplash.com/photo-1466500419182-8602dc906b51"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets</h1>
                  <p>Promote, manage, and host successful events</p>
                  <button  onClick={Click} type="button"
                    className="btn btn-info home-create"><span>Create Event</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="fourth-slide" src="https://hd.unsplash.com/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets</h1>
                  <p>Promote, manage, and host successful events</p>
                  <button  onClick={Click} type="button"
                    className="btn btn-info home-create"><span>Create Event</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <img className="fifth-slide" src="http://unsplash.com/photos/j5LSbCqB1wA/download"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets</h1>
                  <p>Promote, manage, and host successful events</p>
                  <button  onClick={Click} type="button"
                      className="btn btn-info home-create"><span>Create Event</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
             <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
             <span className="sr-only">Previous</span>
           </a>
           <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
             <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
             <span className="sr-only">Next</span>
           </a>
      </div>
  )}
})

module.exports = HomeCarousel
