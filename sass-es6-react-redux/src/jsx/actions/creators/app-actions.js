import * as types from '../action-types';

/*
 * action creators
 */

export default function getAppAction(selectedIndex) {
  return {
    type: types.NAVIGATE,
    selectedIndex,
  };
}
