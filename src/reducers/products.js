import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const constants = {
  SET_PRODUCTS
};


// ------------------------------------
// Actions
// ------------------------------------
export const setProducts = createAction('SET_PRODUCTS');


export const actions = {
  setProducts
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_PRODUCTS]: (state, {payload: products}) => {
    return state.set('entities', fromJS(products));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};