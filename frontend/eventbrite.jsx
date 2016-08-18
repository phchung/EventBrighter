var React = require('react'),
    ReactDom = require('react-dom')

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory,
    Modal = require("react-modal");

var App = require('./components/app'),
    Home = require('./components/home/home'),
    LogInForm = require('./components/nav/login_form'),
    EventShow = require('./components/event/event_show'),
    EventForm = require('./components/event/event_form'),
    Profile = require('./components/profile/profile'),
    Search = require('./components/search/search')

var SessionAction = require('./actions/SessionAction'),
    SessionStore = require('./stores/session'),
    ClientAction = require('./actions/ClientAction'),
    LogAction = require('./actions/LogAction')

function _ensureLoggedIn(nextstate,replace){
  if(!SessionStore.isUserLoggedIn())
  { LogAction.openForm()
    replace('/');}
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="events/:eventId" onEnter={_ensureLoggedIn} component={EventShow}/>
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
