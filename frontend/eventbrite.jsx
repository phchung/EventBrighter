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
    EventShow = require('./components/event/event_show'),
    EventForm = require('./components/event/event_form'),
    Profile = require('./components/profile/profile'),
    Search = require('./components/search/search')


var SessionAction = require('./actions/SessionAction'),
    SessionStore = require('./stores/session'),
    ClientAction = require('./actions/ClientAction')

window.SessionAction = SessionAction
window.SessionStore = SessionStore

function _ensureLoggedIn(nextstate,replace){
  if(!SessionStore.isUserLoggedIn()){replace('/login');}
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="events/:eventId" component={EventShow} />
    <Route path="signup" component={LogInForm}/>
    <Route path="login" component={LogInForm}/>
    <Route path="create" component={EventForm} onEnter={_ensureLoggedIn}/>
    <Route path='u' component={Profile}/>
    <Route path='/d/*' component={Search}/>
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

window.ClientAction = ClientAction;
window.EventForm = EventForm;
