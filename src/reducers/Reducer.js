import { combineReducers } from 'redux';
import { userReducer } from './UserReducer'
import { loginreducer} from './LoginReducer'
import reducer from './SignupReducer'


/* Reducers specify how the application's state changes in response to actions
sent to the store. Remember that actions only describe what happened, but don't
describe how the application's state changes. */

/* The reducer is a pure function that takes the previous state and
an action, and returns the next state. */

/* Note that each of these reducers is managing its own part of the global state.
The state parameter is different for every reducer, and corresponds to the part of
the state it manages.*/

// reducers are the action handlers

// combine all the reducers into one
const allReducers = combineReducers({
  //userInfo: userReducer,
  //isLoggedIn: loginreducer,
  reducer
});

export default allReducers;

/* All combineReducers() does is generate a function that calls your reducers with the
slices of state selected according to their keys, and combines their results  */