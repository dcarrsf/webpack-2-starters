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
const utilServices = angular.module('utilServices', []);

utilServices.service('Utils', () => {
  // Ex 1: To upper case
  this.upper = str => str.toUpperCase();
  // Ex 2: To lower case
  this.lower = str => str.toLowerCase();
});

export default utilServices;
