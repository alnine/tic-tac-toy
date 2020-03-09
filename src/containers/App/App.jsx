import React from 'react';
import { connect } from 'react-redux';
import { Board } from '../../components/Board';

function App({ board }) {
  return (
    <div className="app">
      <div>
        <button type="button">Step Back</button>
        <button type="button">Step Forward</button>
      </div>
      <Board plan={board} />
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
    board: store.boardState.board,
  };
};

export default connect(mapStateToProps)(App);
