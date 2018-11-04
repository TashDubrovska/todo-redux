import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClick }) => (
  <li 
    className={`todo__list__item${completed ? ' todo__list__item--completed' : ''}`} 
    onClick={onClick}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Todo;
