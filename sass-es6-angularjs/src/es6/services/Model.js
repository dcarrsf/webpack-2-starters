import angular from 'angular';

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
const modelServices = angular.module('modelServices', []);

modelServices.factory('Model', () => {
  // Private (Closure)
  const state = {
    a: 0,
    b: 0,
    c: 0,
  };
  // Public
  return {
    // Increment values...
    addState: () => {
      state.a += 10;
      state.b += 10;
      state.c += 10;
      // Return new state
      return state;
    },
    // Get state
    getState: () => state,
  };
});

export default modelServices;
