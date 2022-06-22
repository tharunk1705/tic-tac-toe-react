import { useState } from "react";
import PlayerTurn from "../playerTurn/playerTurn";
import Square from "../square/square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("Winner");
      return squares[a];
    }
  }
  return null;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  //   const [isTied, setIsTied] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = (i) => {
    if (winner || count === 9) {
      return;
    }
    const newSquares = squares.slice();

    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newSquares));
    setCount(count + 1);
    // if (count > 8 && !winner) {
    //   setIsTied(true);
    // }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const resetAllState = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setCount(0);
    setXIsNext(true);
  };
  return (
    <div className="flex flex-col gap-16 justify-center items-center">
      <div className="mt-10">
        {!winner && count < 9 && (
          <PlayerTurn playerName={xIsNext ? "X" : "O"} />
        )}

        {winner && (
          <h4 className="text-lg text-center font-outfit rounded-lg text-green-600 bg-green-200 px-8 py-2 font-bold tracking-wider">
            🥳 {winner} is the Winner 🥳
          </h4>
        )}
        {count === 9 && !winner && (
          <h4 className="text-lg text-center font-outfit rounded-lg text-yellow-600 bg-yellow-200 px-8 py-2 font-bold tracking-wider">
            Game Tied
          </h4>
        )}
      </div>
      <div className="grid grid-cols-3">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>

      <button
        onClick={resetAllState}
        className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg text-xl font-outfit font-semibold tracking-wider shadow-md border border-gray-400 transform active:scale-90"
      >
        Reset Game
      </button>
    </div>
  );
};

export default Board;
