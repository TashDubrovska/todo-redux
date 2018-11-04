import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { format } from 'url';

const AddTodo = ({ dispatch }) => {
  let input;
  const inputId = 'todo-text';

  return (
    <form onSubmit={e => {
      e.preventDefault();
      const inputValue = input.value.trim();

      if(inputValue) {
        dispatch(addTodo(inputValue));
        input.value = '';
      }
    }}>
      <label htmlFor={inputId}>Todo</label>
      <input type='text' id={inputId} ref={node => {input = node}} />

      <button type='submit'>Add todo</button>
    </form>
  )
};

export default connect()(AddTodo);
