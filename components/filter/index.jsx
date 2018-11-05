import React from 'react';
import PropTypes from 'prop-types';
import './_style.scss';

const Filter = ({ children, disabled, onClick }) => (
  <button styleName='filterButton'
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Filter.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;