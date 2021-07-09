import {reducers} from './reducers';
import {applyMiddleware, createStore} from 'redux';
// Logger with default options
import logger from 'redux-logger';
export const store = createStore(reducers, applyMiddleware(logger));
