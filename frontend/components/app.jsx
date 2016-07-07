var React = require('react'),
    Navbar = require('./nav/navbar.jsx')

var App = React.createClass({

  render: function(){
    return(
      <div className="main-div">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

module.exports = App
