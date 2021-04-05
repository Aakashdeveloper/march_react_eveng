import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducer from '../reducer/mainReducer';

// reducer pass data to store
let store = createStore(reducer,applyMiddleware(logger));

export default store;