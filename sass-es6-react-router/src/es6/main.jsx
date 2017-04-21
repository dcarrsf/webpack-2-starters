import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// App component
import App from './containers/app/App';
import Home from './containers/home/Home';
import Start from './containers/start/Start';
import End from './containers/end/End';
// App css
import '../sass/manifest.scss';
/**
 * *******************************************************
 *
 *  The main.js file renders the app to the DOM (bundling entry point).
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/start" component={Start}/>
      <Route path="/end" component={End}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
