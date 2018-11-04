import React from 'react';
import FilterButton from '../../containers/filterButton';
import { VisibilityFilters } from '../../actions';

export default () => (
  <div>
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    {' | '}
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    {' | '}
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
  </div>
);
