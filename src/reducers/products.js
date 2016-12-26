import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import apiUrl from '../api/apiUrl';
import { isEmpty } from 'lodash';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADING_PRODUCTS = 'SET_LOADING_PRODUCTS';
export const SET_NO_PRODUCTS = 'SET_NO_PRODUCTS';
export const SET_QUERY = 'SET_QUERY';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';

export const constants = {
  SET_PRODUCTS,
  SET_LOADING_PRODUCTS,
  SET_NO_PRODUCTS,
  SET_QUERY,
  SET_CURRENT_PRODUCT
};


// ------------------------------------
// Actions
// ------------------------------------
export const setProducts = createAction('SET_PRODUCTS');
export const setLoadingProducts = createAction('SET_LOADING_PRODUCTS');
export const setNoProducts = createAction('SET_NO_PRODUCTS');
export const setQuery = createAction('SET_QUERY');
export const setCurrentProduct = createAction('SET_CURRENT_PRODUCT');

//Search for the products
export const searchProducts = (query) => {
	return (dispatch) => {
		//Set the loading screen
		dispatch(setLoadingProducts(true));
		//Set the query
		dispatch(setQuery(query));
		//Make the fetch call to get Walmart products
		!isEmpty(query) ? fetch(apiUrl + '/search/' + query)
			.then(function(response) {
				if (response.status >= 400) {
					dispatch(setLoadingProducts(false));
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function(data) {
				dispatch(setLoadingProducts(false));
				dispatch(setProducts(data.items));
			}) : dispatch(setNoProducts());
	};
};

//Grab the current product data and place into product detail view
export const selectProduct = (id) => {
	return(dispatch) => {
		fetch(apiUrl + '/items/' + id)
			.then(function(response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(function(data) {
				dispatch(setCurrentProduct(data));
			});
	};
};

export const actions = {
  searchProducts,
  setLoadingProducts,
  selectProduct
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_PRODUCTS]: (state, {payload: prods}) => {
    return state.set('products', fromJS(prods));
  },
  [SET_LOADING_PRODUCTS]: (state, {payload: loading}) => {
  	return state.set('loading', loading);
  },
  [SET_NO_PRODUCTS]: (state) => {
  	return state.delete('products').set('loading', false);
  },
  [SET_QUERY]: (state, {payload: query}) => {
  	return state.set('query', query);
  },
  [SET_CURRENT_PRODUCT]: (state, {payload: currentProduct}) => {
  	return state.set('currentProduct', fromJS(currentProduct));
  }
}, initialState);


export default (state = initialState, action) => {
	return reducer(fromJS(state), action);
};