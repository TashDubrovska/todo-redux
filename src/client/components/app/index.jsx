import React from 'react';
import FilterList from '../filterList';
import AddTodo from '../../containers/addTodo';
import VisibleTodoList from '../../containers/visibleTodoList';
import './_style.scss';

export default () => (
  <div>
    <h1 styleName={'mainHeader'}>Todo App</h1>
    <AddTodo />
    <FilterList />
    <VisibleTodoList />
  </div>
);
