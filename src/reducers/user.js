import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const RESET_USER = 'RESET_USER';

export const constants = {
  SET_USER_PROFILE,
  RESET_USER
};


// ------------------------------------
// Actions
// ------------------------------------
export const setUserProfile = createAction('SET_USER_PROFILE');
export const resetUser = createAction(RESET_USER);


export const actions = {
  setUserProfile,
  resetUser
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [RESET_USER]: () => initialState,
  [SET_USER_PROFILE]: (state, {payload: userObj}) => {
    return state.set('entities', fromJS(userObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
