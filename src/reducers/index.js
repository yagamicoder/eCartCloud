import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import products from './products';
import reviews from './reviews';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  login,
  user,
  products,
  reviews,
  routing: routerReducer
});

export default rootReducer;
