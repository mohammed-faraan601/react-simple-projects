import React, { useEffect, useState } from "react";
import "./styles.css";
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
function Square({ value, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState('');

  function getWinner(squares) {
    const winPattern = [
        [0,1, 2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2, 4,6]
    ];

    for(let i =0; i < winPattern.length;i++) {
        const [x, y, z] = winPattern[i];

        if (squares && squares[x] === squares[y] && squares[y] === squares[z]) {
            return squares[x];
        }
    }
    return null;
  }

  function handleClick(getCurrentIndex) {
    const cpySquares = squares;
    if (getWinner(squares) || cpySquares[getCurrentIndex]) return;
    cpySquares[getCurrentIndex] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquares(cpySquares);
  }

  function handleRestart() {
    setSquares(Array(9).fill(''));
    setIsXturn(true);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
        setStatus('This is a draw! Please restart the game.')
    } else if (getWinner(squares)) {
        setStatus(`Winner is ${getWinner(squares)}! Please restart the game.`)
    } else {
        setStatus(`Next player is  ${isXturn ? 'X' : 'O'}`)
    }
  }, [squares, isXturn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default TicTacToe;
