import * as types from '../constants/actionTypes';
import { generateEmptyBoard } from '../utils';

const initialState = {
  history: [generateEmptyBoard()],
  currentBoard: 0,
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
      const updateHistory = state.history.slice(0, state.currentBoard + 1);
      const lastBoard = updateHistory[updateHistory.length - 1];
      const newBoard = [...lastBoard];
      newBoard[payload.index] = {
        id: payload.index,
        value: payload.value,
      };
      return {
        ...state,
        history: [...updateHistory, newBoard],
        currentBoard: state.currentBoard + 1,
        currentPlayer: newCurrentPlayer,
        stepsLeft: state.stepsLeft - 1,
      };
    }

    case types.WRITE_RESULT: {
      return {
        ...state,
        history: [generateEmptyBoard()],
        currentBoard: 0,
        currentPlayer: 'X',
        setsPlayed: state.setsPlayed + 1,
        stepsLeft: 9,
        result: {
          ...state.result,
          [payload.winner]: state.result[payload.winner] + 1,
        },
      };
    }

    case types.PREV_BOARD: {
      return {
        ...state,
        currentBoard: state.currentBoard - 1,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        stepsLeft: state.stepsLeft + 1,
      };
    }

    case types.NEXT_BOARD: {
      return {
        ...state,
        currentBoard: state.currentBoard + 1,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        stepsLeft: state.stepsLeft - 1,
      };
    }

    default:
      return state;
  }
};

export default reducers;
