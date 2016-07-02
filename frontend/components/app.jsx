var React = require('react'),
    Navbar = require('./nav/navbar.jsx')

var App = React.createClass({

  render: function(){
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
})

module.exports = App
