import * as types from '../action-types';

/*
 * action creators
 */

export default function getStartAction(id) {
  return {
    type: types.START_CLICKED,
    id,
  };
}
