import {INCREMENT} from '../constants/login';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
const initialState = {};
export default function login(state = initialState, action) {

  switch (action.type) {
    case INCREMENT: {
      const num = action.num + state.num;
      return objectAssign({}, state, {num: num});
    }
    default:
      return state;
  }
}
