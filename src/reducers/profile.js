import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const constants = {
  SET_USER_PROFILE,
  RESET_PROFILE,
  UPDATE_PROFILE
};


// ------------------------------------
// Actions
// ------------------------------------
export const setUserProfile = createAction('SET_USER_PROFILE');
export const resetProfile = createAction(RESET_PROFILE);
export const updateProfile = () => {
  return () => {

  };
};

export const actions = {
  setUserProfile,
  resetProfile
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [RESET_PROFILE]: () => initialState,
  [SET_USER_PROFILE]: (state, {payload: userObj}) => {
    return state.set('entities', fromJS(userObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
