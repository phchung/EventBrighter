var React = require('react')

var HomeCarousel = React.createClass({
  render: function(){
    return(

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
            <li data-target="#myCarousel" data-slide-to="3" className=""></li>
            <li data-target="#myCarousel" data-slide-to="4" className=""></li>
          </ol>
          <div className="carousel-inner" role="listbox">

            <div className="item active">
              <img className="first-slide" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=698b0decc7115d06b16801d7b8291c63"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets!</h1>
                  <p>Promote, manage, and host successful events</p>
                  <p><a href="#/events">Search for tickets</a></p>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="second-slide" src="https://images.unsplash.com/photo-1436018626274-89acd1d6ec9d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=92f38d817ad38cf47ae71ea40833ba8a"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets!</h1>
                  <p>Promote, manage, and host successful events</p>
                  <p><a href="#/events">Search for tickets</a></p>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="third-slide" src="https://images.unsplash.com/photo-1467219598992-52591d77fdec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=88e113d0469f942ab6578605da11626e"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets!</h1>
                  <p>Promote, manage, and host successful events</p>
                  <p><a href="#/events">Search for tickets</a></p>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="fourth-slide" src="https://images.unsplash.com/reserve/RONyPwknRQOO3ag4xf3R_Kinsey.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d310b05f9c9d755fe5608e02ed3dc16b"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets!</h1>
                  <p>Promote, manage, and host successful events</p>
                  <p><a href="#/events">Search for tickets</a></p>
                </div>
              </div>
            </div>

            <div className="item">
              <img className="fifth-slide" src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=9bd244971b9cb52a8418cf2f66fce464"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Sell Tickets!</h1>
                  <p>Promote, manage, and host successful events</p>
                  <p><a href="#/events">Search for tickets</a></p>
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
