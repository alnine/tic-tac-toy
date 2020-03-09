import * as types from '../constants/actionTypes';
import { generateEmptyBoard } from '../utils';

const initialState = {
  board: generateEmptyBoard(),
  currentPlayer: 'X',
  setsPlayed: 0,
  stepsLeft: 9,
  result: {
    X: 0,
    O: 0,
  },
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.MAKE_STEP: {
      const newCurrentPlayer = payload.value === 'X' ? 'O' : 'X';
      const newBoard = [...state.board];
      newBoard[payload.index] = {
        id: payload.index,
        value: payload.value,
      };
      return {
        ...state,
        board: newBoard,
        currentPlayer: newCurrentPlayer,
        stepsLeft: state.stepsLeft - 1,
      };
    }

    case types.WRITE_RESULT: {
      return {
        ...state,
        board: generateEmptyBoard(),
        currentPlayer: 'X',
        setsPlayed: state.setsPlayed + 1,
        stepsLeft: 9,
        result: {
          ...state.result,
          [payload.winner]: state.result[payload.winner] + 1,
        },
      };
    }

    default:
      return state;
  }
};

export default reducers;
