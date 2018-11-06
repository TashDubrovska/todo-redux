import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const Todo = ({ text, completed, onClick }) => (
  <li 
    styleName={`todo${completed ? ' todo--completed' : ''}`} 
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
