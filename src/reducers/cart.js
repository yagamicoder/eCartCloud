import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export const constants = {
  SET_CART_ITEMS
};


// ------------------------------------
// Actions
// ------------------------------------
export const setCartItems = createAction('SET_CART_ITEMS');
export const addToCart = (item, id) => {
	return(dispatch, getState) => {
		const state = fromJS(getState());
		const cartItems = state.getIn(['cart', 'entities'], fromJS({}));
		const cartObj = {[id]: item};
		const mergedCartObj = cartItems.merge(cartObj);
		dispatch(setCartItems(mergedCartObj));
	};
};

export const actions = {
  addToCart
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_CART_ITEMS]: (state, {payload: item}) => {
    return state.set('entities', fromJS(item));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};