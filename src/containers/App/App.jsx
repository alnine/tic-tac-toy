import React from 'react';
import { Board } from '../../components/Board';

function App() {
  return (
    <div className="App">
      <div>
        <button type="button">Step Back</button>
        <button type="button">Step Forward</button>
      </div>
      <Board />
      <div className="result">
        <p>Set played: 5</p>
        <p>Player 1 wins: 1</p>
        <p>Player 2 wins: 4</p>
      </div>
    </div>
  );
}

export default App;
