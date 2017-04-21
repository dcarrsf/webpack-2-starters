import * as types from '../action-types';

/*
 * action creators
 */

export default function getHomeAction(id) {
  return {
    type: types.HOME_CLICKED,
    id,
  };
}
