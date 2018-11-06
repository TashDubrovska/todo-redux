import React from 'react';
import {shallow} from 'enzyme';
import Filter from '.';
import Todo from '../todo';

describe('Filter component', () => {
  const childNode = shallow(<Todo key={0} text={'Hey there'} completed={false} onClick={() => {}} />);
  const mockFunctions = {
    onClick: () => {}
  };
  let filter, spyOnClick;

  beforeEach(() => {
    spyOnClick = jest.spyOn(mockFunctions, 'onClick');
    filter = shallow(<Filter key={0} children={childNode} disabled={false} onClick={spyOnClick} />)
  });

  afterAll(() => {
    spyOnClick.mockRestore();
  });

  test('should render correct children', () => {
    expect(filter.childAt(0).html()).toEqual(childNode.html());
  });

  test('should become disabled if prop is passed', () => {
    filter.setProps({
      disabled: true
    });

    expect(filter.html()).toContain('disabled');
  });

  test('should envoke passed method on click', () => {
    filter.simulate('click');

    expect(spyOnClick).toBeCalled();
  });
});