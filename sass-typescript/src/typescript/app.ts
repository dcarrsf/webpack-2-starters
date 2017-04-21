import Hello from './components/Hello';
import '../sass/app.scss';

/**
 * *******************************************************
 *
 *  The app.js file renders the app to the DOM (bundling entry point).
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
const html = Hello();

if (html) {
  // Add element
  document.getElementById('app').innerHTML = html;
}
