export const generateEmptyBoard = () => {
  const BOARD_SIZE = 9;
  const initialArr = Array(BOARD_SIZE).fill({});

  const emptyBoard = initialArr.map((item, index) => {
    return { id: index, value: null };
  });

  return emptyBoard;
};

export const checkWinner = board => {
  if (typeof board === 'undefined') {
    return null;
  }

  if (!Array.isArray(board) || board.length === 0) {
    return null;
  }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner = null;
  lines.forEach(line => {
    const [a, b, c] = line;
    if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
      winner = board[a].value;
    }
  });

  return winner;
};

export default {
  generateEmptyBoard,
  checkWinner,
};
