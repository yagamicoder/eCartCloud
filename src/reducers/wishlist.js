import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_WISHLIST_ITEMS = 'SET_WISHLIST_ITEMS';

export const constants = {
  SET_WISHLIST_ITEMS
};


// ------------------------------------
// Actions
// ------------------------------------
export const setWishlistItems = createAction('SET_WISHLIST_ITEMS');
export const addToWishlist = (item) => {
	return (dispatch, getState) => {
		const state = fromJS(getState());
		const entities = state.getIn(['wishlist', 'entities'], fromJS([]));
    const wishlistItems = entities.push(item);
		dispatch(setWishlistItems(wishlistItems));
	};
};

export const deleteWishlistItem = (id) => {
  return (dispatch, getState) => {
    const state = fromJS(getState());
    const wishlist = state.getIn(['wishlist', 'entities'], fromJS([]));
    const updatedWishlistItems = wishlist.filter(item => {
      return id !== item.get('itemId');
    });
    dispatch(setWishlistItems(updatedWishlistItems));
  };
};
export const actions = {
  addToWishlist,
  deleteWishlistItem
};


const initialState = fromJS({
  entities: []
});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_WISHLIST_ITEMS]: (state, {payload: item}) => {
    return state.set('entities', fromJS(item));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
