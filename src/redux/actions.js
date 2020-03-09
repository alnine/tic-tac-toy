import * as types from '../constants/actionTypes';

export const makeStep = (index, value) => {
  return {
    type: types.MAKE_STEP,
    payload: {
      index,
      value,
    },
  };
};

export const writeResult = winner => {
  return {
    type: types.WRITE_RESULT,
    payload: {
      winner,
    },
  };
};

export const prevBoard = () => {
  return {
    type: types.PREV_BOARD,
  };
};

export const nextBoard = () => {
  return {
    type: types.NEXT_BOARD,
  };
};

export default { makeStep, writeResult, prevBoard, nextBoard };
