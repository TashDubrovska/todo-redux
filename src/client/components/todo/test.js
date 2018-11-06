import React from 'react';
import {shallow} from 'enzyme';
import Todo from '.';

describe('Todo component', () => {
  const mockFunctions = {
    onClick: () => {}
  };
  const text = 'Destroy half of the universe';

  let todo, onClickSpy;

  beforeEach(() => {
    onClickSpy = jest.spyOn(mockFunctions, 'onClick');
    todo = shallow(<Todo text={text} completed={true} onClick={mockFunctions.onClick}/>);
  });

  afterEach(() => {
    onClickSpy.mockRestore();
  });

  test('should render supplied text', () => {  
    expect(todo.text()).toEqual(text);
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
    todo.simulate('click');
  
    expect(onClickSpy).toBeCalled();
  });
});
