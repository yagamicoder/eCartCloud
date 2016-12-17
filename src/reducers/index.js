import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import login from './login';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  login,
  routing: routerReducer
});

export default rootReducer;
