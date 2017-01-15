import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_HISTORY_ITEMS = 'SET_HISTORY_ITEMS';

export const constants = {
  SET_HISTORY_ITEMS
};


// ------------------------------------
// Actions
// ------------------------------------
export const setHistoryItems = createAction('SET_HISTORY_ITEMS');
export const addToHistory = (item) => {
	return (dispatch, getState) => {
		const state = fromJS(getState());
		const entities = state.getIn(['history', 'entities'], fromJS([]));
    const historyItems = entities.push(item);
		dispatch(setHistoryItems(historyItems));
	};
};

export const deleteHistoryItem = (id) => {
  return (dispatch, getState) => {
    const state = fromJS(getState());
    const history = state.getIn(['history', 'entities'], fromJS([]));
    const updatedHistory = history.filter(item => {
      return id !== item.get('itemId');
    });
    dispatch(setHistoryItems(updatedHistory));
  };
};
export const actions = {
  addToHistory,
  deleteHistoryItem
};


const initialState = fromJS({
  entities: []
});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_HISTORY_ITEMS]: (state, {payload: item}) => {
    return state.set('entities', fromJS(item));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
