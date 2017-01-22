import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CART_ITEMS = 'SET_CART_ITEMS';
export const OPEN_CART_NOTIFICATION ='OPEN_CART_NOTIFICATION';

export const constants = {
  SET_CART_ITEMS,
  OPEN_CART_NOTIFICATION
};


// ------------------------------------
// Actions
// ------------------------------------
export const setCartItems = createAction('SET_CART_ITEMS');
export const openCartNotification = createAction('OPEN_CART_NOTIFICATION');
export const addToCart = (item) => {
	return (dispatch, getState) => {
		const state = fromJS(getState());
		const entities = state.getIn(['cart', 'entities'], fromJS([]));
    const cartItems = entities.push(item);
		dispatch(setCartItems(cartItems));
    dispatch(openCartNotification(true));
	};
};

export const deleteCartItem = (id) => {
  return (dispatch, getState) => {
    const state = fromJS(getState());
    const cart = state.getIn(['cart', 'entities'], fromJS([]));
    const updatedCartItems = cart.filter(item => {
      return id !== item.get('itemId');
    });
    dispatch(setCartItems(updatedCartItems));
    dispatch(openCartNotification(true));
  };
};
export const actions = {
  addToCart,
  deleteCartItem,
  openCartNotification
};


const initialState = fromJS({
  entities: []
});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [OPEN_CART_NOTIFICATION]: (state, {payload: open}) => {
    return state.set('showCartMsg', open);
  },
  [SET_CART_ITEMS]: (state, {payload: item}) => {
    return state.set('entities', fromJS(item));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
