var React = require('react'),
    SessionStore = require('../../stores/session'),
    SessionAction = require('../../actions/SessionAction'),
    Modal = require("react-modal"),
    LoginForm = require('./login_form.jsx'),
    hashHistory = require('react-router').hashHistory

var modalStyles = {
  content : {
    top                   : '-20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '300px',
    height                : '300px',
    padding               : '0px',
    transition            : 'top .5s'
  }
};

var Navbar = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function(){
    return ({modalOpen: false,
      login: false
    })
  },

  closeModal: function(){
    this.setState({modalOpen: false})
    modalStyles.content.top = '-20%'
  },

  openModal: function(){
    this.setState({modalOpen: true})
  },

  onModalOpen: function(){
    modalStyles.content.top = '30%'
  },

  __onTitleClick: function(){
    hashHistory.push("/")
  },

  __handleClick: function(bool){
    this.setState({login: bool})
    this.openModal()
  },

  handleLogout: function(e){
    e.preventDefault()
    SessionAction.logOut()
    this.closeModal()
  },

  greeting: function(){

    component = (this.state.login) ? <LoginForm form="login"/> :
      <LoginForm form="signup"/>

    if(SessionStore.isUserLoggedIn()){
      return(
        <hgroup className = 'header-group'>
          <header onClick={this.onTitleClick}
            className="header-title"><h1>Eventbrite</h1>
          </header>
          <nav className="nav-links">
            <a className="header-link" onClick={this.handleLogout}
               type="submit">Logout</a>
            <a className="header-link">{SessionStore.currentUser().username}</a>
         </nav>
        </hgroup>
      )
    } else{
      return(
        <div className = 'header-group'>
          <header className="header-title"><h1>Eventbrite</h1>
          </header>
          <nav className="nav-links">
            <a className="header-link"
              onClick={this.__handleClick.bind(this, true)}>Login</a>
            <a className="header-link"
              onClick={this.__handleClick.bind(this, false)}>SignUp</a>
          </nav>
            <Modal
              isOpen={this.state.modalOpen}
              onRequestClose={this.closeModal}
              style={modalStyles}
              onAfterOpen={this.onModalOpen}>
              <button  className="close"
                aria-hidden="true"
                onClick={this.closeModal}>X</button>
              {component}
            </Modal>
        </div>
      )
    }
  },

  render: function(){
    return(
      <div>
        {this.greeting()}
      </div>
    )
  }
})

module.exports = Navbar
