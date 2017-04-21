import * as types from '../actions/action-types';

const initialState = {
  items: [
    {
      label: 'Home',
      route: '/',
      selected: true
    }, {
      label: 'Start',
      route: '/start',
      selected: false
    }, {
      label: 'End',
      route: '/end',
      selected: false
    }
  ],
  selectedIndex: 0,
};

// Helpers
function getIndex(route) {
  let index;
  switch (route) {
    case '/start':
      index = 1;
      break;
    case '/end':
      index = 2;
      break;
    case '/':
    default:
      index = 0;
      break;
  }
  return index;
}

const appReducer = function (state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, { selectedIndex: getIndex(action.payload.pathname) });
    // The action below is redundant - we need to listen to the router to keep the menu in sync.
    // case types.NAVIGATE:
    //   return Object.assign({}, state, { selectedIndex: action.selectedIndex });
    default: break;
  }
  return state;
};

export default appReducer;
