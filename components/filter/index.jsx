import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ children, disabled, onClick }) => (
  <button
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