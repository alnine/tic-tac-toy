import React from 'react';
import { Cell } from '../Cell';
import StyledBoard from './Board.style';

const Board = ({ plan, onCellClick }) => {
  return (
    <StyledBoard>
      {plan.map((item, index) => (
        <Cell key={item.id} value={item.value} onClick={() => onCellClick(index)} />
      ))}
    </StyledBoard>
  );
};

export default Board;
