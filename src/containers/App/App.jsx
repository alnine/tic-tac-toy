import React from 'react';
import { connect } from 'react-redux';
import { Board } from '../../components/Board';
import { makeStep, writeResult, prevBoard, nextBoard } from '../../redux/actions';
import { checkWinner } from '../../utils/helpers';
import { AppWrapper } from './App.style';
import { Button } from '../../common/Button';

function App({ history, currentBoard, currentPlayer, setsPlayed, stepsLeft, result, dispatch }) {
  const winner = checkWinner(history[currentBoard]);
  if (winner) {
    dispatch(writeResult(winner));
  }

  if (stepsLeft === 0) {
    dispatch(writeResult('O'));
  }

  const stepHandler = index => {
    if (history[currentBoard][index].value) {
      return;
    }
    dispatch(makeStep(index, currentPlayer));
  };

  const nextHandler = () => {
    dispatch(nextBoard());
  };

  const prevHandler = () => {
    dispatch(prevBoard());
  };

  const isLastBoard = history.length - 1 === currentBoard;

  return (
    <AppWrapper>
      <div className="history">
        <Button
          className="history-btn--prev"
          label="Step Back"
          disabled={!currentBoard}
          onClick={prevHandler}
        />
        <Button
          className="history-btn--next"
          label="Step Forward"
          disabled={isLastBoard}
          onClick={nextHandler}
        />
      </div>
      <Board plan={history[currentBoard]} onCellClick={stepHandler} />
      <div>
        <p>Set played: {setsPlayed}</p>
        <p>Player 1 wins: {result.X}</p>
        <p>Player 2 wins: {result.O}</p>
      </div>
    </AppWrapper>
  );
}

const mapStateToProps = store => {
  return {
    history: store.history,
    currentBoard: store.currentBoard,
    currentPlayer: store.currentPlayer,
    setsPlayed: store.setsPlayed,
    stepsLeft: store.stepsLeft,
    result: store.result,
  };
};

export default connect(mapStateToProps)(App);
