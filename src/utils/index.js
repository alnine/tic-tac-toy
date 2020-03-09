export const generateEmptyBoard = (size = 3) => {
  const cellCount = size ** 2;
  const initialArr = Array(cellCount).fill({});

  const emptyBoard = initialArr.map((item, index) => {
    return { id: index, value: null };
  });

  return emptyBoard;
};

export default { generateEmptyBoard };
