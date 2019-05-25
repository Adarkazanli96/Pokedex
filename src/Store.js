import Reducer from './reducers/Reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';



// create store
const store = createStore(Reducer, window.STATE_FROM_SERVER, applyMiddleware(thunk));

export default store;