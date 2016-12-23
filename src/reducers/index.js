import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import login from './login';
import user from './user';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  login,
  user,
  routing: routerReducer
});

export default rootReducer;
