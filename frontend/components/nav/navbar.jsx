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

  __handleClick: function(bool){
    this.setState({login: bool})
    this.openModal()
  },

  _handleMenuClick: function(){
      this.context.router.push("/u");
  },

  __titleClick: function(){
    hashHistory.push("/")
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
        <header className='nav-header'>
            <div onClick={this.__titleClick}className="title">
              NotEventbrite
            </div>
            <div className="header-list">
              <div><a className="header-link" onClick={this.handleLogout}
                     type="submit">Logout</a></div>
              <div className="menu-user">
                 <a className="header-link">{SessionStore.currentUser().username}</a>
                 <div className="menu-right">
                   <ul className="header-notifications">
                     <li onClick={this._handleMenuClick}>Tickets</li>
                     <li onClick={this._handleMenuClick}>Saved</li>
                     <li onClick={this._handleMenuClick}>Manage Events</li>
                   </ul>
                 </div>
               </div>
            </div>
       </header>
      )
    } else{
      return(
        <header className = 'nav-header'>
            <div className="title" onClick={this.__titleClick}>
              NotEventbrite
            </div>
            <div className="header-link-login">
              <a className="header-link"
                onClick={this.__handleClick.bind(this, true)}>Login</a>
              <a className="header-link"
                onClick={this.__handleClick.bind(this, false)}>SignUp</a>
            </div>
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
        </header>
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
