import { generateEmptyBoard, checkWinner } from './index';
import boardCombinations from './boardCombinations';

describe('generateEmptyBoard', () => {
  it('empty board', () => {
    const emptyBoardPattern = [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
    ];

    expect(generateEmptyBoard()).toEqual(emptyBoardPattern);
  });
});

describe('checkWinner', () => {
  const { emptyBoard, winnerCombinations } = boardCombinations;

  function makeWinnerTest(board, boardIndex) {
    it(`Board index ${boardIndex}`, () => {
      expect(checkWinner(board)).toEqual('X');
    });
  }

  it('start board with null', () => {
    expect(checkWinner(emptyBoard)).toEqual(null);
  });

  winnerCombinations.forEach((board, index) => {
    makeWinnerTest(board, index);
  });
});
