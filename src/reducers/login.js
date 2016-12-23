import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { setUserProfile } from '../reducers/user';
import { browserHistory } from 'react-router';
import apiUrl from '../api/apiUrl';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_LOGIN_DETAILS = 'SET_LOGIN_DETAILS';
export const SET_LOADING_SCREEN = 'SET_LOADING_SCREEN';

export const constants = {
  SET_LOGIN_DETAILS,
  SET_LOADING_SCREEN
};

// ------------------------------------
// Actions
// ------------------------------------
export const setloginDetails = createAction('SET_LOGIN_DETAILS');
export const setLoadingScreen = createAction('SET_LOADING_SCREEN');

export const login = (fbObj) => {
  return (dispatch) => {
    const accessToken = fbObj.accessToken;
    //Set the loading screen
    dispatch(setLoadingScreen(true));
    //Dump login info into the login init prop
    dispatch(setloginDetails(fbObj));
    fetch(apiUrl + '/login/' + accessToken)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(data) {
      //Build the user object and set it in the user branch of the state tree
        const userObj = {
          'id': data.id,
          'first_name': data.first_name,
          'last_name': data.last_name,
          'full_name': data.name,
          'email': data.email,
          'gender': data.gender,
          'timezone': data.timezone,
          'picture': fbObj.picture
        };
        dispatch(setUserProfile(userObj));
        setTimeout(() => {
          browserHistory.push('/registrationStep2');
          dispatch(setLoadingScreen(false));
        }, 5000);
    });
  };
};

export const actions = {
  login
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_LOGIN_DETAILS]: (state, {payload: loginObj}) => {
    return state.set('init', fromJS(loginObj));
  },
  [SET_LOADING_SCREEN]: (state, {payload: flag}) => {
    return state.set('loadingProfile', flag);
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
