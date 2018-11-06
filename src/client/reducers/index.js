import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilterReducer';
import todos from './todosReducer';

export default combineReducers({
  visibilityFilter,
  todos,
});
