import { combineReducers } from 'redux';
import * as types from '../constants/actionTypes';
import { generateEmptyBoard } from '../utils';

const initialBoardState = {
  board: generateEmptyBoard(),
};

const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    case types.MAKE_STEP: {
      const newBoard = [...state.board];
      newBoard[action.id] = 'X';
      return {
        ...state,
        board: newBoard,
      };
    }

    default:
      return state;
  }
};

export default combineReducers({
  boardState: boardReducer,
});
