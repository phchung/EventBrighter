var React = require('react'),
    HomeCarousel = require('./home_carousel')

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <HomeCarousel/>
      </div>
    )
  }
})

module.exports = Home
