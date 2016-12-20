import * as types from '../constants/login';

export function login(res) {
  return function (dispatch) {
    console.log(res);
    return dispatch();
  };
}

export function increment(value) {
  return {
    type: types.INCREMENT,
    num: value
  };
}
