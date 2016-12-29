import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import fetch from 'isomorphic-fetch';
import apiUrl from '../api/apiUrl';
import moment from 'moment';
import buildReviewObj from '~/utils/buildReviewObj';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_LOADING_REVIEWS = 'SET_LOADING_REVIEWS';
export const SET_REVIEWS = 'SET_REVIEWS';
export const SET_ERROR_REVIEWS = 'SET_ERROR_REVIEWS';
export const SET_FORM_DATA = 'SET_FORM_DATA';

export const constants = {
  SET_LOADING_REVIEWS,
  SET_REVIEWS,
  SET_ERROR_REVIEWS,
  SET_FORM_DATA
};


// ------------------------------------
// Actions
// ------------------------------------
export const setLoadingReviews = createAction('SET_LOADING_REVIEWS');
export const setReviews = createAction('SET_REVIEWS');
export const setErrorReviews = createAction('SET_ERROR_REVIEWS');
export const setFormData = createAction('SET_FORM_DATA');
export const fetchReviews = id => {
	return (dispatch) => {
		dispatch(setErrorReviews(false));
		dispatch(setLoadingReviews(true));
		fetch(apiUrl + '/reviews/' + id)
			.then(response => {
				if (response.status >= 400) {
					dispatch(setErrorReviews(true));
					throw new Error("Bad response from server");
				}
				return response.json();
			}).then(data => {
				dispatch(setLoadingReviews(false));
				dispatch(setReviews(data));
			}).catch(error => {
				console.log('Fetch error:' + error);
				dispatch(setLoadingReviews(false));
				dispatch(setErrorReviews(true));
			});
	};
};

export const addReview = (formData) => {
	return (dispatch, getState) => {
		const state = fromJS(getState());
		const user = state.getIn(['user', 'entities']);
		const reviews = state.getIn(['reviews', 'entities']);
		const product = state.getIn(['products', 'currentProduct']);
		const reviewObj = buildReviewObj(user, product, formData);

		const mergeReviews = reviews.get('reviews').push(reviewObj);
		const finalReviewsObj = reviews.merge({'reviews': mergeReviews});
		dispatch(setReviews(finalReviewsObj));
		dispatch(setFormData({}));
	};
};

export const actions = {
  fetchReviews,
  setFormData,
  addReview
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [SET_LOADING_REVIEWS]: (state, {payload: flag}) => {
    return state.set('loadingReviews', flag);
  },
  [SET_ERROR_REVIEWS]: (state, {payload: flag}) => {
  	return state.set('reviewError', flag);
  },
  [SET_REVIEWS]: (state, {payload: reviews}) => {
  	return state.set('entities', fromJS(reviews));
  },
  [SET_FORM_DATA]: (state, {payload: formData}) => {
  	return state.set('formData', fromJS(formData));
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};