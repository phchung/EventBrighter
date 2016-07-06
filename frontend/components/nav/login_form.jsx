var React = require('react'),
    SessionAction = require('../../actions/SessionAction'),
    SessionStore = require('../../stores/session'),
    Link = require('react-router').Link,
    hashHistory = require('react-router').hashHistory,
    ErrorStore = require('../../stores/error')


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
    if(this.props.form ==="login"){
      SessionAction.logIn(user)
    } else{
      SessionAction.signUp(user)
    }
    this.setState(this.blankAttr)
  },

  formType: function(){
  return this.props.form[0].toUpperCase() + this.props.form.slice(1)
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
      <form className="login-form" onSubmit={this.handleSubmit}>
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
        <input className="login-box button" type='submit' value={this.formType()}></input>
      </form>
    )
  }
})

module.exports = LogInForm
