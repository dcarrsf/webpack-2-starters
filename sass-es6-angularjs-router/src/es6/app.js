import app from './controllers/AppController';
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
if (app() !== null) {
  // do stuff...
  console.log('Angular App Loaded!');
}
