import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const constants = {
  SET_USER_PROFILE
};


// ------------------------------------
// Actions
// ------------------------------------
export const setUserProfile = createAction('SET_USER_PROFILE');


export const actions = {
  setUserProfile
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_USER_PROFILE]: (state, {payload: userObj}) => {
    return state.set('entities', fromJS(userObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};