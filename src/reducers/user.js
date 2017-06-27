import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const RESET_USER = 'RESET_USER';
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE';
export const SET_EDIT_FORM_DATA = 'SET_EDIT_FORM_DATA';
export const SAVING_PROFILE = 'SAVING_PROFILE';

export const constants = {
  SET_USER_PROFILE,
  RESET_USER,
  EDIT_USER_PROFILE,
  SET_EDIT_FORM_DATA,
  SAVING_PROFILE
};


// ------------------------------------
// Actions
// ------------------------------------
export const setUserProfile = createAction('SET_USER_PROFILE');
export const resetUser = createAction('RESET_USER');
export const editUserProfile = createAction('EDIT_USER_PROFILE');
export const setEditFormData = createAction('SET_EDIT_FORM_DATA');
export const savingProfile = createAction('SAVING_PROFILE');
export const cancelEditProfile = () => {
  return (dispatch) => {
    dispatch(editUserProfile(false));
    dispatch(setEditFormData({}));
  };
};

export const saveProfile = (formData) => {
  return (dispatch, getState) => {
    const state = fromJS(getState());
    const user = state.getIn(['user', 'entities'], fromJS({}));
    const formDataObj = {
      'first_name': formData.get('first_name'),
      'last_name': formData.get('last_name'),
      'full_name': formData.get('first_name') + ' ' + formData.get('last_name'),
      'email': formData.get('email'),
      'location': formData.get('location'),
      'bio': formData.get('bio')
    };
    const updatedUser = user.merge(formDataObj);
    dispatch(setUserProfile(updatedUser));
    dispatch(savingProfile(true));
    setTimeout(() => {
      dispatch(editUserProfile(false));
      dispatch(savingProfile(false));
      dispatch(setEditFormData({}));
    }, 3000);

  };
};

export const actions = {
  setUserProfile,
  resetUser,
  editUserProfile,
  setEditFormData,
  saveProfile,
  cancelEditProfile,
  savingProfile
};


const initialState = fromJS({});

// ------------------------------------
// Reducers
// ------------------------------------
const reducer = handleActions({
  [RESET_USER]: () => initialState,
  [SET_USER_PROFILE]: (state, {payload: userObj}) => {
    return state.set('entities', fromJS(userObj));
  },
  [EDIT_USER_PROFILE]: (state, {payload: flag}) => {
    return state.set('showEditMode', flag);
  },
  [SET_EDIT_FORM_DATA]: (state, {payload: formData}) => {
    return state.set('editFormData', fromJS(formData));
  },
  [SAVING_PROFILE]: (state, {payload: flag}) => {
    return state.set('savingProfile', flag);
  }
}, initialState);


export default (state = initialState, action) => {
  return reducer(fromJS(state), action);
};
