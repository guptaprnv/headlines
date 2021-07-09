import {combineReducers} from 'redux';
import {feeds} from './feed';
import {entity} from './entity';

export const reducers = combineReducers({
  feeds,
  entity,
});
