import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import '../sass/app.scss';

/**
 * *******************************************************
 *
 *  The app.js file renders the app to the DOM (bundling entry point).
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
render(
  <App />,
  document.getElementById('app')
);
