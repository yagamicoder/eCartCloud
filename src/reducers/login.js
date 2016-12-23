import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '~/api/apiUrl';
import { setUserProfile } from '~/reducers/user';

/*************************

      Constants

*************************/
export const SET_TOKEN = 'SET_TOKEN';

export const constants = {
  SET_TOKEN
};

/*************************

      Actions

*************************/
export const setToken = createAction('SET_TOKEN');
export const login = (fbObj) => {
  const accessToken = fbObj.accessToken;
  const expires = fbObj.expiresIn;
  const signedRequest = fbObj.signedRequest;
  //Create the token object
  const tokenObj = {
    'accessToken': accessToken,
    'expires': expires,
    'signedRequest': signedRequest
  };
  return (dispatch, getState) => {
    //Dump init login info into the login token state
    dispatch(setToken(tokenObj));
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
    });
  };
};

export const actions = {
  login
};


const initialState = fromJS({});

/*************************

      Reducers

*************************/
const reducer = handleActions({
  [SET_TOKEN]: (state, {payload: tokenObj}) => {
    return fromJS(state).set('token', fromJS(tokenObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return fromJS(reducer(state, action));
};
