import { END_CLICKED } from '../actions/action-types';

// Default values
const initialState = {
  title: 'End',
  subtitle: 'That\'s all folks!',
  clickTracks: 0,
};

const endReducer = function (state = initialState, action) {
  switch (action.type) {
    case END_CLICKED:
      return Object.assign({}, state, { clickTracks: state.clickTracks + 1 });
    default: break;
  }
  return state;
};

export default endReducer;
