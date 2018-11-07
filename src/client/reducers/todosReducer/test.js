import todosReducer from '.';

describe('Reducer', () => {
  const state = [{
    text: 'Mine more gold',
    completed: false,
  }];

  test('should return previous state if action is not valid', () => {
    expect(todosReducer(state, { type: 'INVALID_ACTION' })).toEqual(state);
  });

  test('should return correct state if ADD_TODO action is disparched', () => {
    const text = 'Say hello to darkness';
    const newState = [...state, { text, completed: false }];

    expect(todosReducer(state, { type: 'ADD_TODO', text })).toEqual(newState);
  });

  test('should return correct state if REMOVE_TODO action is disparched', () => {
    const index = 0;
    const newState = [];

    expect(todosReducer(state, { type: 'REMOVE_TODO', index })).toEqual(newState);
  });

  test('should return correct state if TOGGLE_TODO action is disparched', () => {
    const index = 0;
    const newState = [{ text: state[index].text, completed: !state[index].completed }];

    expect(todosReducer(state, { type: 'TOGGLE_TODO', index })).toEqual(newState);
  });
});
