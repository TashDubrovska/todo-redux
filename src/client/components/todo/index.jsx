import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const Todo = ({ text, completed, onTodoClick, onDeleteClick }) => (
  <li styleName={`todo${completed ? ' todo--completed' : ''}`}>
    <div styleName={`todo__text`} onClick={onTodoClick} tabIndex='0'>{text}</div>
    <button styleName={`todo__delete`} onClick={onDeleteClick} aria-label='Delete'></button>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default Todo;
