import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { format } from 'url';
import './_style.scss';

const AddTodo = ({ dispatch }) => {
  let input;
  const inputId = 'todo-text';

  return (
    <form styleName='addTodoForm' onSubmit={e => {
      e.preventDefault();
      const inputValue = input.value.trim();

      if(inputValue) {
        dispatch(addTodo(inputValue));
        input.value = '';
      }
    }}>
      <label styleName='addTodoInputLabel' htmlFor={inputId}>Todo</label>
      <input styleName='addTodoInput' type='text' id={inputId} ref={node => {input = node}} />

      <button styleName='addTodoSubmit' type='submit'>Add todo</button>
    </form>
  )
};

export default connect()(AddTodo);
