import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import TodoList from '../../components/todoList';
import getVisibleTodos from './getVisibleTodos';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
