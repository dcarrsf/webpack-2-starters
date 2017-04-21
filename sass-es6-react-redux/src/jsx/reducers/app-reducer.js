import * as types from '../actions/action-types';

const initialState = {
  items: [],
  selectedIndex: 0,
};

const appReducer = function (state = initialState, action) {
  switch (action.type) {
    case types.NAVIGATE:
      return Object.assign({}, state, { selectedIndex: action.selectedIndex });
    default: break;
  }
  return state;
};

export default appReducer;
