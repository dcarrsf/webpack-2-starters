import { START_CLICKED } from '../actions/action-types';

// Default values
const initialState = {
  title: 'Start',
  subtitle: 'Get Started',
  clickTracks: 0,
};

const startReducer = function (state = initialState, action) {
  switch (action.type) {
    case START_CLICKED:
      return Object.assign({}, state, { clickTracks: state.clickTracks + 1 });
    default: break;
  }
  return state;
};

export default startReducer;
