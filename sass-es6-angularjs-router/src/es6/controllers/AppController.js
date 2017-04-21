import angular from 'angular';
import ngRoute from 'angular-route';

// Services & Directves
import modelServices from '../services/Model';
import utilServices from '../services/Utils';
import viewDirectives from '../directives/View';
import viewControllers from './Routes';

// Partials
import homePartial from '../partials/home/Home.html';
import startPartial from '../partials/start/Start.html';
import endPartial from '../partials/end/End.html';
import errorPartial from '../partials/error/Error.html';

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
const AppController = ($scope, $route, $location, Model) => {
  // -------------------------
  // Initialize:
  $scope.items = Model.getItems();
  // -------------------------
  // Route Handling:
  $scope.$on('$routeChangeStart', (event, next, current) => {
    // Add validation here if needed...
  });
  $scope.$on('$routeChangeSuccess', (event, next, current) => {
    // Update the view as needed after successful route changes...
    // console.log($location.$$url)
    const route = $location.$$url;
    // Get index
    let index = 0;
    if (route === '/start') {
      index = 1;
    } else if (route === '/end') {
      index = 2;
    }
    // Set index
    Model.setSelectedIndex(index);
    // Render update to state...
    $scope.items = Model.getItems();
  });
  $scope.$on('$routeChangeError', (event, next, current) => {
    // Handle routing errors here...
  });
}
// Dependency annotations...
AppController.$inject = ['$scope', '$route', '$location', 'Model'];

// ---------------------------
// ROUTES:

const AppRoutes = ($routeProvider, $locationProvider) => {
  // Define routes
  $routeProvider
  .when('/', {
    controller: 'HomeRoute',
    template: homePartial,
  })
  .when('/start', {
    controller: 'StartRoute',
    template: startPartial,
  })
  .when('/end', {
    controller: 'EndRoute',
    template: endPartial,
  })
  // 404 otherwise
  .otherwise({
    template: errorPartial,
  });
  // Clear the default '!' hash prefix...
  $locationProvider.hashPrefix('');
}
// Dependency annotations...
AppRoutes.$inject = ['$routeProvider', '$locationProvider'];

// ---------------------------
// BOOTSTRAP!

export default function () {
  // Return Angular module
  return (
    // Bind dependencies
    angular.module('foobar', [
      'ngRoute',
      'modelServices',
      'utilServices',
      'viewDirectives',
      'viewControllers'
    ])
    // Register controller
    .controller('AppController', AppController)
    // Register routes
    .config(AppRoutes)
  );
}
