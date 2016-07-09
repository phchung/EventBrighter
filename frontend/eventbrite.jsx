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
    Event = require('./components/event/event'),
    EventForm = require('./components/event/event_form')

var SessionAction = require('./actions/SessionAction'),
    SessionStore = require('./stores/session')

window.SessionAction = SessionAction
window.SessionStore = SessionStore

function _ensureLoggedIn(nextstate,replace){
  if(!SessionStore.isUserLoggedIn()){replace('/login');}
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="events" component={Event} />
    <Route path="signup" component={LogInForm}/>
    <Route path="login" component={LogInForm}/>
    <Route path="create" component={EventForm} onEnter={_ensureLoggedIn}/>
  </Route>
)

document.addEventListener("DOMContentLoaded", function () {
    Modal.setAppElement(document.body)

    if (window.currentUser) {
    SessionAction.receiveCurrentUser(window.currentUser);
  }
    ReactDom.render(
      <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
    );
  });
