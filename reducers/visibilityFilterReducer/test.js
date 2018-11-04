import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../../actions';
import visibilityFilterReducer from '.';

const state = VisibilityFilters.SHOW_ACTIVE;

test('should return previous state if action is not valid', () => {
  expect(visibilityFilterReducer(state, { type: 'INVALID_ACTION' })).toEqual(state);
});

test('should update visibility filter when SET_VISIBILITY_FILTER action is dispatched', () => {
  const filter = VisibilityFilters.SHOW_COMPLETED;
  const newState = filter;

  expect(visibilityFilterReducer(state, { type: SET_VISIBILITY_FILTER, filter })).toEqual(newState);
});
