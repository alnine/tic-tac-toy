import React from 'react';
import { connect } from 'react-redux';
import { Board } from '../../components/Board';
import { makeStep, writeResult } from '../../redux/actions';
import { checkWinner } from '../../utils';
import { AppWrapper } from './App.style';
import { Button } from '../../common/Button';

function App({ board, currentPlayer, setsPlayed, stepsLeft, result, dispatch }) {
  const winner = checkWinner(board);
  if (winner) {
    dispatch(writeResult(winner));
  }

  if (stepsLeft === 0) {
    dispatch(writeResult('O'));
  }

  const stepHandler = index => {
    if (board[index].value) {
      return;
    }
    dispatch(makeStep(index, currentPlayer));
  };

  return (
    <AppWrapper>
      <div className="history">
        <Button className="history-btn--prev" label="Step Back" />
        <Button className="history-btn--next" label="Step Forward" />
      </div>
      <Board plan={board} onCellClick={stepHandler} />
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
    board: store.board,
    currentPlayer: store.currentPlayer,
    setsPlayed: store.setsPlayed,
    stepsLeft: store.stepsLeft,
    result: store.result,
  };
};

export default connect(mapStateToProps)(App);
