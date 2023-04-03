import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const playTurn = (i: number, j: number) => {
    if (board[i][j]) return;
    const winner = checkWinner();
    if (winner) return;
    const updatedBoard = [...board];
    updatedBoard[i][j] = currentPlayer;
    setBoard(updatedBoard);
    setCurrentPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  const checkWinner = () => {
    for (let i = 0; i < board.length; i++) {
      // horizontal
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      )
        return board[i][0];
      // vertical
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      )
        return board[0][i];
    }
    // diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    )
      return board[1][1];
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    )
      return board[1][1];
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {row.map((col, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className="col"
                  onClick={() => playTurn(rowIndex, colIndex)}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}

      {checkWinner() ? (
        <p>{checkWinner()} won!</p>
      ) : (
        <p>Current player: {currentPlayer}</p>
      )}

      <button
        onClick={() => {
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setCurrentPlayer("X");
        }}
      >
        Reset board
      </button>
    </div>
  );
}

export default App;
