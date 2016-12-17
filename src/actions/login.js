import * as types from '../constants/login';

// example of a thunk using the redux-thunk middleware
/*export function increment(val) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.INCREMENT,
      num: val
    });
  };
}*/

export function increment(value) {
  return {
    type: types.INCREMENT,
    num: value
  };
}
