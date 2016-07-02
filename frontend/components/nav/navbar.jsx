var React = require('react'),
    SessionStore = require('../../stores/session'),
    SessionAction = require('../../actions/SessionAction'),
    Link = require('react-router').Link

var Navbar = React.createClass({

  handleLogout: function(e){
    e.preventDefault()
    SessionAction.logOut()
  },

  greeting: function(){

    if(SessionStore.isUserLoggedIn()){
      return(
        <hgroup className = 'header-group'>
          <h2>Logged on:{SessionStore.currentUser().username}</h2>
          <input value="logout" onClick={this.handleLogout}
            type="submit" className="header-button"/>
        </hgroup>
      )
    } else{
      return(
        <nav className="login-signup">
          <Link to="/signup">Sign Up</Link>
          &nbsp;
          <Link to="/login">Log in</Link>
        </nav>
      )
    }
  },

  render: function(){
    return(
      <div>
        <header><h1>Welcome to EventBrite</h1></header>
        {this.greeting()}
      </div>
    )
  }
})

module.exports = Navbar
