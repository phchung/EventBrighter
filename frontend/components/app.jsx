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

function power (a,b){
  if(b<0){
    return 0
  }else if(b===0)
    {return 1
    }else{
      return a* power(a,b-1)
    }
  }
