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
const viewDirectives = angular.module('viewDirectives', []);

viewDirectives.directive('foo', () => {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="foo pull-left" ng-click="clickHandler()"><h1>Foo: {{a}}</h1></div>',
  };
});

viewDirectives.directive('bar', () => {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="bar pull-right" ng-click="clickHandler()"><h1>Bar: {{b}}</h1></div>',
  };
});

viewDirectives.directive('fooBar', () => {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="foobar card"><foo/><bar/></div>',
  };
});

export default viewDirectives;
