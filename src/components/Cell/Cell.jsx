import React from 'react';
import PropTypes from 'prop-types';
import CellButton from './Cell.style';

const Cell = ({ value, onClick }) => {
  return <CellButton label={value} onClick={onClick} />;
};

export default Cell;

Cell.propTypes = {
  value: PropTypes.string,
};

Cell.defaultProps = {
  value: null,
};
