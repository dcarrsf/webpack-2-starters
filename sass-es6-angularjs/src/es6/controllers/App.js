import angular from 'angular';

// Services & Directves
import modelServices from '../services/Model';
import utilServices from '../services/Utils';
import viewDirectives from '../directives/View';

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
export default function () {
  // Bootstrap the app
  const app = angular.module('foobar', ['modelServices', 'utilServices', 'viewDirectives']);
  // Register app controller
  app.controller('AppController', ['$scope', 'Model', ($scope, Model) => {
    // Helper
    function updateView(state) {
      $scope.a = state.a;
      $scope.b = state.b;
    }
    // Initialize
    updateView(Model.getState());
    // Update on click...
    $scope.clickHandler = () => {
      updateView(Model.addState());
    };
  }]);
  // Return true if we got this far...
  return true;
}
