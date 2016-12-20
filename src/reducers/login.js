import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';

export const SET_TOKEN = 'SET_TOKEN';

export const constants = {
  SET_TOKEN
};

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
    dispatch(setToken(tokenObj));
    fetch('http://localhost/eCartCloudAPI/src/api.php/login/' + accessToken)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    });
  };
};

export const actions = {
  login
};


const initialState = fromJS({});

const reducer = handleActions({
  [SET_TOKEN]: (state, {payload: tokenObj}) => {
    return fromJS(state).set('token', fromJS(tokenObj));
  }
}, initialState);


export default (state = initialState, action) => {
  return fromJS(reducer(state, action));
};
