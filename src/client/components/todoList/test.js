import React from 'react';
import {shallow} from 'enzyme';
import TodoList from '.';

describe('Todo component', () => {
  const mockFunctions = {
    onClick: () => {}
  };
  const todos = [
    {
      id: 0,
      text: 'Kill Hitler',
      completed: true
    },
    {
      id: 1,
      text: 'Marry the Doctor',
      completed: false
    }
  ];

  let todoList, onClickSpy;

  beforeEach(() => {
    todoList = shallow(<TodoList todos={todos} onTodoClick={mockFunctions.onClick}/>);
  });

  test('should create a wrapper with correct class', () => {
    expect(todoList.find('ul').prop('className')).toContain('todoList');
  });

  test('should render a correct number of todo items', () => {
    expect(todoList.find('ul').children()).toHaveLength(todos.length);
  });

  test('should pass correct props to the children', () => {
    todoList.find('ul').children().map((child, index) => {
      const props = child.props();

      expect(props.id).toEqual(index);
      expect(props.text).toEqual(todos[index].text);
      expect(props.completed).toEqual(todos[index].completed);
    });
  });
});
