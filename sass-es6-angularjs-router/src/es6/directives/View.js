import angular from 'angular';
// Components
import Menu from './menu/Menu';

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

// Components
viewDirectives.directive('menu', Menu);

export default viewDirectives;
