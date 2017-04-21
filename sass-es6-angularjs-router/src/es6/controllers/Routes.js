import angular from 'angular';
// Controllers
import EndRoute from './routes/EndRoute';
import HomeRoute from './routes/HomeRoute';
import StartRoute from './routes/StartRoute';

/**
 * *******************************************************
 *
 *  The App is the highest level component. It acts as
 *  a wrapper for other top level container components.
 *
 *  @author     Dan Carr
 *  @date       January 2017
 *
 * *******************************************************
 */
const viewControllers = angular.module('viewControllers', []);

// Controllers (By Route)
viewControllers.controller('EndRoute', EndRoute);
viewControllers.controller('HomeRoute', HomeRoute);
viewControllers.controller('StartRoute', StartRoute);

export default viewControllers;
