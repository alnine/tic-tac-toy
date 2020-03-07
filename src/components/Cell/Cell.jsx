import React from 'react';
import PropTypes from 'prop-types';
import CellButton from './Cell.style';

const Cell = ({ value }) => {
  return <CellButton label={value} onClick={() => console.log(`Cell ${value} click`)} />;
};

export default Cell;

Cell.propTypes = {
  value: PropTypes.string.isRequired,
};
