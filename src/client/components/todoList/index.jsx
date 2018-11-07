import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../todo';
import './_style.scss';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <ul styleName={'todoList'}>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo}
        onTodoClick={() => onTodoClick(index) }
        onDeleteClick={() => onDeleteClick(index)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoList;
