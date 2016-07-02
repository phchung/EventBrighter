var React = require('react'),
    ReactDom = require('react-dom')

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory

var App = require('./components/App'),
    Home = require('./components/Home'),
    SignUpForm = require('./components/nav/signup_form'),
    LogInForm = require('./components/nav/login_form')

var SessionAction = require('./actions/SessionAction'),
    SessionStore = require('./stores/session')

window.SessionAction = SessionAction
window.SessionStore = SessionStore

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignUpForm}/>
    <Route path="login" component={LogInForm}/>
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
    ReactDom.render(
      <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
    );
  });
