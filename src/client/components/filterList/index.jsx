import React from 'react';
import FilterButton from '../../containers/filterButton';
import { VisibilityFilters } from '../../actions';
import './_style.scss';

export default () => (
  <ul styleName='filterList'>
    <li styleName='filterItem'>
      <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    </li>
    <li styleName='filterItem'>
      <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    </li>
    <li styleName='filterItem'>
      <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
    </li>
  </ul>
);
