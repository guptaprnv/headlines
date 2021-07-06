import {combineReducers} from 'redux';
import {reducerForFeed1} from './reducerForFeed1';
import {reducerForFeed2} from './reducerForFeed2';

export const reducers = combineReducers({
  reducerForFeed1,
  reducerForFeed2,
});
