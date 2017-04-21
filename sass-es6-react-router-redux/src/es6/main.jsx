import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// App component
import App from './containers/app/App';
import Home from './containers/home/Home';
import Start from './containers/start/Start';
import End from './containers/end/End';
// Redux store
import store from './store.js';
// App css
import '../sass/manifest.scss';
// Enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
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
  <Provider store={store}>
    { /* Tell the Router to use the enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/start" component={Start}/>
        <Route path="/end" component={End}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
