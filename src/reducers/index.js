import { combineReducers } from 'redux';
import login from './login';
import user from './user';
import products from './products';
import reviews from './reviews';
import cart from './cart';
import wishlist from './wishlist';
import history from './history';
import profile from './profile';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  login,
  user,
  products,
  reviews,
  cart,
  wishlist,
  history,
  profile,
  routing: routerReducer
});

export default rootReducer;
