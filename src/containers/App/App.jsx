import React from 'react';
import { connect } from 'react-redux';
import { Board } from '../../components/Board';
import { makeStep } from '../../redux/actions';

function App({ board, currentPlayer, dispatch }) {
  const stepHandler = index => {
    if (board[index].value) {
      return;
    }
    dispatch(makeStep(index, currentPlayer));
  };

  return (
    <div className="app">
      <div>
        <button type="button">Step Back</button>
        <button type="button">Step Forward</button>
      </div>
      <div>Current Player: {currentPlayer}</div>
      <Board plan={board} onCellClick={stepHandler} />
      <div className="result">
        <p>Set played: 5</p>
        <p>Player 1 wins: 1</p>
        <p>Player 2 wins: 4</p>
      </div>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    board: store.board,
    currentPlayer: store.currentPlayer,
  };
};

export default connect(mapStateToProps)(App);
