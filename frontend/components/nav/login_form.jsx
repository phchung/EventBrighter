var React = require('react'),
    SessionAction = require('../../actions/SessionAction'),
    SessionStore = require('../../stores/session'),
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory,
    ErrorStore = require('../../stores/error'),
    ErrorAction = require('../../actions/ErrorAction'),
    ApiUtil = require('../../util/apiUtils')


var LogInForm = React.createClass({

  contextTypes: {
      router: React.PropTypes.object.isRequired
    },

  getInitialState: function(){
    return this.blankAttr
  },

  blankAttr: {
    username: "",
    password:""
  },

  __onChange: function(){
  if (SessionStore.isUserLoggedIn()) {
    hashHistory.push("/");
  }
},

  componentDidMount: function(){
    ErrorAction.clearErrors()
    this.sessionStore = SessionStore.addListener(this.__onChange)
    this.errorStore = ErrorStore.addListener(this.forceUpdate.bind(this))
  },

  componentWillUnmount: function(){
    this.sessionStore.remove()
    this.errorStore.remove()
  },

  handleSubmit: function(e){
    e.preventDefault()
    const user = {username:this.state.username,password:this.state.password}
    if(this.props.form ==="signup"){
      SessionAction.signUp(user)
    } else {
      SessionAction.logIn(user)
    }
    this.setState(this.blankAttr)
  },

  handleDemoAccount: function(e){
    e.preventDefault()
    const user = {username:"DemoUser",password:"password"}
    SessionAction.logIn(user)
    hashHistory.push('/')
  },

  formType: function(){
    if(this.props.form){
      return this.props.form[0].toUpperCase() + this.props.form.slice(1)
    } else{
      return "login"
    }
  },

  fieldError: function(field){
    const errors = ErrorStore.formErrors(this.props.form)
    if (!errors[field]){ return }

    if (field !== 'base'){
      var holder = field
    }
    const messages = errors[field].map( (errorMsg, i) => {
      return <div className="errors" key={ i }>{holder} { errorMsg }</div>;
    });
    return messages
  },

  update: function(prop){
    return (e) => this.setState({[prop]: e.target.value});
  },

  render: function(){

    return(
      <form className="login-form">
        <h1 className="login-text">{this.formType()}</h1>
          {this.fieldError('base')}
          {this.fieldError('password')}
          {this.fieldError('username')}
        <input type="text" className="login-box"
          value={this.state.username}
          placeholder='Username'
          onChange={this.update("username")}></input>
        <input type="password" className="login-box"
          value={this.state.password}
          placeholder='Password'
          onChange={this.update("password")}></input>
        <br/>
        <div><input className="login-box button" type='submit' value={this.formType()}
          onClick={this.handleSubmit}></input></div>
        <input className="demo-button" type='submit' value="Demo Login"
          onClick={this.handleDemoAccount}></input>
      </form>
    )
  }
})

module.exports = LogInForm
