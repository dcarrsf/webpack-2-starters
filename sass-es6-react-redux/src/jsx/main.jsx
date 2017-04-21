import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// App component
import App from './containers/app/App';
// Redux store
import store from './store.js';
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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
