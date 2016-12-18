import * as types from '../constants/login';

export function login() {
  return function (dispatch) {

    return dispatch();
  };
}

export function increment(value) {
  return {
    type: types.INCREMENT,
    num: value
  };
}
