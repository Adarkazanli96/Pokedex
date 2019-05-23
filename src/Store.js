import Reducer from './reducers/Reducer'
import { createStore, combineReducers } from 'redux';



// create store
const store = createStore(Reducer, window.STATE_FROM_SERVER);

export default store;