import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '~/api/apiUrl';

export const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const constants = {
  SET_USER_PROFILE
};

export const setUserProfile = createAction('SET_USER_PROFILE');


export const actions = {
  setUserProfile
};


const initialState = fromJS({});

const reducer = handleActions({
  [SET_USER_PROFILE]: (state, {payload: userObj}) => {
    return fromJS(state).set('entities', fromJS(userObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return fromJS(reducer(state, action));
};