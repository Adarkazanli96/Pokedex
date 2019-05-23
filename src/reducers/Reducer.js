import { combineReducers } from 'redux';
import UserReducer from './UserReducer'
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
  UserReducer,
  LoginReducer
});
export default rootReducer;