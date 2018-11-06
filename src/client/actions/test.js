import * as actions from './index';

test('creates correct data shape for add todo', () => {
  const text = 'bake cookies';

  expect(actions.addTodo(text)).toEqual({
    type: actions.ADD_TODO,
    text,
  });
});

test('creates correct data shape for toggle todo', () => {
  const index = 3;

  expect(actions.toggleTodo(index)).toEqual({
    type: actions.TOGGLE_TODO,
    index,
  });
});

test('creates correct data shape for visibiliy filter setting', () => {
  const filter = 'the claw';

  expect(actions.setVisibilityFilter(filter)).toEqual({
    type: actions.SET_VISIBILITY_FILTER,
    filter,
  });
});
