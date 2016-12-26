import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import apiUrl from '../api/apiUrl';

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
export const searchProducts = (query) => {
	return (dispatch) => {
		fetch(apiUrl + '/search/' + query)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function(data) {
				console.log(data);
				dispatch(setProducts(data.items));
			});
	};
};

export const actions = {
  searchProducts
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_PRODUCTS]: (state, {payload: prods}) => {
    return state.set('products', fromJS(prods));
  }
}, initialState);


export default (state = initialState, action) => {
	return reducer(fromJS(state), action);
};