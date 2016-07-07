var React = require('react'),
    ReactDom = require('react-dom')

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory,
    Modal = require("react-modal");

var App = require('./components/App'),
    Home = require('./components/home/Home'),
    LogInForm = require('./components/nav/login_form'),
    Event = require('./components/event/event')

var SessionAction = require('./actions/SessionAction'),
    SessionStore = require('./stores/session')

window.SessionAction = SessionAction
window.SessionStore = SessionStore

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="events" component={Event} />
    <Route path="signup" component={LogInForm}/>
    <Route path="login" component={LogInForm}/>
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement(document.body)
    ReactDom.render(
      <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
    );
  });
