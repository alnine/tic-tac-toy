import { generateEmptyBoard, checkWinner } from './helpers';
import boardCombinations from './boardCombinations';

describe('generateEmptyBoard', () => {
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

  it('empty board', () => {
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

  it('function result without arguments is null', () => {
    expect(checkWinner()).toBeNull();
  });

  it('function argument must be a not empty array', () => {
    expect(checkWinner([])).toBeNull();
  });

  it('start board with null', () => {
    expect(checkWinner(emptyBoard)).toEqual(null);
  });

  winnerCombinations.forEach((board, index) => {
    makeWinnerTest(board, index);
  });
});
