import { HOME_CLICKED } from '../actions/action-types';

// Default values
const initialState = {
  title: 'Home',
  subtitle: 'Click the Get Started tab to begin...',
  clickTracks: 0,
};

const homeReducer = function (state = initialState, action) {
  switch (action.type) {
    case HOME_CLICKED:
      return Object.assign({}, state, { clickTracks: state.clickTracks + 1 });
    default: break;
  }
  return state;
};

export default homeReducer;
