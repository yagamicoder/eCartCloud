import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import login from './login';
import user from './user';
import products from './products';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  login,
  user,
  products,
  routing: routerReducer
});

export default rootReducer;
