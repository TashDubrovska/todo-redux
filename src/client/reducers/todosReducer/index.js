import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        text: action.text,
        completed: false,
      }];
    case REMOVE_TODO:
      return state.filter((todo, index) => index !== action.index);
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    default:
      return state;
  }
};
