import { combineReducers } from 'redux';

import posts from './posts';
import user from './user';

export default combineReducers({
  posts,
  user
})
