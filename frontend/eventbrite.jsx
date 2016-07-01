var React = require('react'),
    ReactDom = require('react-dom')

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory

var App = require('./components/App'),
    Home = require('./components/Home')


var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
    ReactDom.render(
      <Router history={hashHistory}>{routes}</Router>,
      document.getElementById('root')
    );
  });
