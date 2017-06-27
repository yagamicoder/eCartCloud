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
export const SET_LOADING_PRODUCTS_ERROR = 'SET_LOADING_PRODUCTS_ERROR';
export const SET_NO_PRODUCTS = 'SET_NO_PRODUCTS';
export const SET_QUERY = 'SET_QUERY';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export const SET_PRODUCT_DETAIL_ERR = 'SET_PRODUCT_DETAIL_ERR';
export const SET_LOADING_PRODUCT_DETAIL = 'SET_LOADING_PRODUCT_DETAIL';
export const RESET_PRODUCTS = 'RESET_PRODUCTS';

export const constants = {
  SET_PRODUCTS,
  SET_LOADING_PRODUCTS,
  SET_LOADING_PRODUCTS_ERROR,
  SET_NO_PRODUCTS,
  SET_QUERY,
  SET_CURRENT_PRODUCT,
  SET_PRODUCT_DETAIL_ERR,
  SET_LOADING_PRODUCT_DETAIL,
  RESET_PRODUCTS
};


// ------------------------------------
// Actions
// ------------------------------------
export const setProducts = createAction('SET_PRODUCTS');
export const setLoadingProducts = createAction('SET_LOADING_PRODUCTS');
export const setLoadingProductsError = createAction('SET_LOADING_PRODUCTS_ERROR');
export const setNoProducts = createAction('SET_NO_PRODUCTS');
export const setQuery = createAction('SET_QUERY');
export const setCurrentProduct = createAction('SET_CURRENT_PRODUCT');
export const setProductDetailErr = createAction('SET_PRODUCT_DETAIL_ERR');
export const setLoadingProductDetail = createAction('SET_LOADING_PRODUCT_DETAIL');
export const resetProducts  = createAction(RESET_PRODUCTS);

//Search for the products
export const searchProducts = (query) => {
	return (dispatch) => {
		//Set the loading screen
		dispatch(setLoadingProducts(true));
		//Kill the error message in the component
		dispatch(setLoadingProductsError(false));
		//Set the query
		dispatch(setQuery(query));
		//Make the fetch call to get Walmart products
		!isEmpty(query) ? fetch(apiUrl + '/search/' + query)
			.then(response => {
				if (response.status >= 400) {
					dispatch(setLoadingProducts(false));
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(data => {
				//Kill the loading screen
				dispatch(setLoadingProducts(false));
				//Place products into the state
				dispatch(setProducts(data.items));
			}).catch(error => {
				//Kill the loading screen
				dispatch(setLoadingProducts(false));
				//Set the error
				dispatch(setLoadingProductsError(true));
				console.log('Fetch error:' + error);
			}) : dispatch(setNoProducts());
	};
};

//Grab the current product data and place into product detail view
export const selectProduct = id => {
	return(dispatch) => {
		//Show the loading screen
		dispatch(setLoadingProductDetail(true));
		//Kill the error screen
		dispatch(setProductDetailErr(false));
		fetch(apiUrl + '/items/' + id)
			.then(response => {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(data => {
				//Kill the loading screen
				dispatch(setLoadingProductDetail(false));
				//Place the data into the state
				dispatch(setCurrentProduct(data));
			}).catch(error => {
				//Display the error screen
				dispatch(setProductDetailErr(true));
				//Kill the loading screen
				dispatch(setLoadingProductDetail(false));
				console.log('Fetch error:' + error);
			});
	};
};

export const actions = {
  searchProducts,
  setLoadingProducts,
  setLoadingProductsError,
  selectProduct,
  resetProducts
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [RESET_PRODUCTS]: () => initialState,
  [SET_PRODUCTS]: (state, {payload: prods}) => {
    return state.set('products', fromJS(prods));
  },
  [SET_LOADING_PRODUCTS]: (state, {payload: loading}) => {
  	return state.set('loading', loading).set('loadingProductsErr', false);
  },
  [SET_LOADING_PRODUCTS_ERROR]: (state, {payload: flag}) => {
  	return state.set('loadingProductsErr', flag);
  },
  [SET_NO_PRODUCTS]: (state) => {
  	return state.delete('products').set('loading', false);
  },
  [SET_QUERY]: (state, {payload: query}) => {
  	return state.set('query', query);
  },
  [SET_CURRENT_PRODUCT]: (state, {payload: currentProduct}) => {
  	return state.set('currentProduct', fromJS(currentProduct));
  },
  [SET_PRODUCT_DETAIL_ERR]: (state, {payload: flag}) => {
  	return state.set('productDetailError', flag);
  },
  [SET_LOADING_PRODUCT_DETAIL]: (state, {payload: flag}) => {
  	return state.set('loadingProductDetail', flag);
  }
}, initialState);


export default (state = initialState, action) => {
	return reducer(fromJS(state), action);
};
