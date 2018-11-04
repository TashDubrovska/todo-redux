import React from 'react';
import FilterList from './filterList';
import AddTodo from './addTodo';
import VisibleTodoList from '../containers/visibleTodoList';

//<AddTodo />
//<VisibleTodoList />
//<FilterList />

export default () => (
  <div>
    <h1>Todo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <FilterList />
  </div>
);
