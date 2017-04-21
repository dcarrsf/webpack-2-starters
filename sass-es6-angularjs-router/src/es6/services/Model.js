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
  const navState = [
    {
      label: 'Home',
      route: '#/',
      selected: true
    }, {
      label: 'Start',
      route: '#/start',
      selected: false
    }, {
      label: 'End',
      route: '#/end',
      selected: false
    }
  ];

  // Track state
  const appState = {
    selectedIndex: 0,
  };

  // Public
  return {
    // Get state
    getItems: () => navState,
    // Update state
    setSelectedIndex: (index) => {
      // Track index
      appState.selectedIndex = index;
      // Update state
      navState.forEach((item, i) => {
        item.selected = i === index;
      });
    }
  };
});

export default modelServices;
