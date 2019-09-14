import { combineReducers } from 'redux';
import user from './user';
import category from './category';
import publish from './publish';
import post from './post';

export default combineReducers({
  user,
  category,
  post,
  publish,
});
