import Reducer from './reducers/Reducer'
import { createStore } from 'redux';

// create store
const store = createStore(Reducer);

export default store;