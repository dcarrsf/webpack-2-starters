import * as types from '../action-types';

/*
 * action creators
 */

export default function getEndAction(id) {
  return {
    type: types.END_CLICKED,
    id,
  };
}
