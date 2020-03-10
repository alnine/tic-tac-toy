const boardCombinations = {
  emptyBoard: [
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
  ],

  winnerCombinations: [
    [
      { id: 0, value: 'X' },
      { id: 1, value: 'X' },
      { id: 2, value: 'X' },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
    ],
    [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: 'X' },
      { id: 4, value: 'X' },
      { id: 5, value: 'X' },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: null },
    ],
    [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: 'X' },
      { id: 7, value: 'X' },
      { id: 8, value: 'X' },
    ],
    [
      { id: 0, value: 'X' },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: 'X' },
      { id: 4, value: null },
      { id: 5, value: null },
      { id: 6, value: 'X' },
      { id: 7, value: null },
      { id: 8, value: null },
    ],
    [
      { id: 0, value: null },
      { id: 1, value: 'X' },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: 'X' },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: 'X' },
      { id: 8, value: null },
    ],
    [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: 'X' },
      { id: 3, value: null },
      { id: 4, value: null },
      { id: 5, value: 'X' },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: 'X' },
    ],
    [
      { id: 0, value: null },
      { id: 1, value: null },
      { id: 2, value: 'X' },
      { id: 3, value: null },
      { id: 4, value: 'X' },
      { id: 5, value: null },
      { id: 6, value: 'X' },
      { id: 7, value: null },
      { id: 8, value: null },
    ],
    [
      { id: 0, value: 'X' },
      { id: 1, value: null },
      { id: 2, value: null },
      { id: 3, value: null },
      { id: 4, value: 'X' },
      { id: 5, value: null },
      { id: 6, value: null },
      { id: 7, value: null },
      { id: 8, value: 'X' },
    ],
  ],
};

export default boardCombinations;