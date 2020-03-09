import React from 'react';
import { Cell } from '../Cell';
import StyledBoard from './Board.style';

const Board = ({ plan }) => {
  const handleClick = i => {
    console.log('Cell index is ', i);
  };

  return (
    <StyledBoard>
      {plan.map((item, index) => (
        <Cell key={item.id} value={item.value} onClick={() => handleClick(index)} />
      ))}
    </StyledBoard>
  );
};

export default Board;
