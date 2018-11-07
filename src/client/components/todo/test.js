import React from 'react';
import {shallow} from 'enzyme';
import Todo from '.';

describe('Todo component', () => {
  const mockFunctions = {
    onTodoClick: () => {},
    onDeleteClick: () => {}
  };
  const text = 'Destroy half of the universe';

  let todo, onTodoClickSpy, onDeleteClickSpy;

  beforeEach(() => {
    onTodoClickSpy = jest.spyOn(mockFunctions, 'onTodoClick');
    onDeleteClickSpy = jest.spyOn(mockFunctions, 'onDeleteClick');
    todo = shallow(<Todo text={text} completed={true} onTodoClick={mockFunctions.onTodoClick} onDeleteClick={mockFunctions.onDeleteClick}/>);
  });

  afterEach(() => {
    onTodoClickSpy.mockRestore();
    onDeleteClickSpy.mockRestore();
  });

  test('should render supplied text', () => {  
    expect(todo.text()).toEqual(`${text}Delete`);
  });

  test('should make each todo focusable', () => {  
    expect(todo.prop('tabIndex')).toEqual('0');
  });

  test('should apply correct class if action is complete', () => {  
    expect(todo.prop('className')).toContain('todo--completed')
  });

  test('should not apply additional class if action is not complete', () => {
    todo.setProps({
      completed: false
    });

    expect(todo.hasClass('todo__list__item--completed')).toBe(false);
  });

  test('should call onClick function when todo is clicked', () => {
    todo.find('div').simulate('click');
  
    expect(onTodoClickSpy).toBeCalled();
  });

  test('should call onClick function when delete todo is clicked', () => {
    todo.find('button').simulate('click');
  
    expect(onDeleteClickSpy).toBeCalled();
  });
});
