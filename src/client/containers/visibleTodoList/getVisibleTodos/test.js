import { VisibilityFilters } from '../../../actions';
import getVisibleTodos from '.';

describe('getVisibleTodos', () => {
  const todos = [
    {
      text: 'Escape Tatooine',
      completed: true,
    },
    {
      text: 'Join flight academy',
      completed: false,
    },
    {
      text: 'Join rebellion',
      completed: true,
    },
  ];

  test('should return original todos if invalid filter is passed', () => {
    expect(getVisibleTodos(todos, 'INVALID_FILTER')).toEqual(todos);
  });

  test(`should return original todos if ${VisibilityFilters.SHOW_ALL} is passed`, () => {
    expect(getVisibleTodos(todos, VisibilityFilters.SHOW_ALL)).toEqual(todos);
  });

  test(`should return only uncompleted todos if ${VisibilityFilters.SHOW_ACTIVE} is passed`, () => {
    const expectedTodos = todos.filter(todo => !todo.completed);

    expect(getVisibleTodos(todos, VisibilityFilters.SHOW_ACTIVE)).toEqual(expectedTodos);
  });

  test(`should return only completed todos if ${VisibilityFilters.SHOW_COMPLETED} is passed`, () => {
    const expectedTodos = todos.filter(todo => todo.completed);

    expect(getVisibleTodos(todos, VisibilityFilters.SHOW_COMPLETED)).toEqual(expectedTodos);
  });
});
