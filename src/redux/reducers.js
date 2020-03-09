import * as types from '../constants/actionTypes';
import { generateEmptyBoard } from '../utils';

const initialState = {
  board: generateEmptyBoard(),
  currentPlayer: 'X',
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
      };
    }

    default:
      return state;
  }
};

export default reducers;
