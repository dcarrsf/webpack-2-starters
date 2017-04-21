import angular from 'angular';
import app from './controllers/App';
import '../sass/main.scss';

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
if (app()) {
  // do stuff...
  console.log('Angular App Loaded!', angular.version);
}
