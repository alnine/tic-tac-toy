import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from '../Cell';
import StyledBoard from './Board.style';

const Board = ({ plan, onCellClick }) => {
  return (
    <StyledBoard>
      {plan &&
        plan.map((item, index) => (
          <Cell key={item.id} value={item.value} onClick={() => onCellClick(index)} />
        ))}
    </StyledBoard>
  );
};

export default Board;

Board.propTypes = {
  plan: PropTypes.arrayOf(PropTypes.object),
  onCellClick: PropTypes.func,
};

Board.defaultProps = {
  plan: null,
  onCellClick: null,
};
