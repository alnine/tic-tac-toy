import React from 'react';
import { Cell } from '../Cell';
import StyledBoard from './Board.style';

const generateEmptyBoard = size => {
  const cellCount = size ** 2;
  const initialArr = Array(cellCount).fill({});

  const emptyBoart = initialArr.map((item, index) => {
    return { id: index, value: null };
  });

  return emptyBoart;
};

const Board = () => {
  const boardSize = 3;
  const boardPlan = generateEmptyBoard(boardSize);

  const handleClick = i => {
    console.log('Cell index is ', i);
  };

  return (
    <StyledBoard size={boardSize}>
      {boardPlan.map(({ id, value }) => (
        <Cell key={id} value={value} onClick={() => handleClick(id)} />
      ))}
    </StyledBoard>
  );
};

export default Board;
