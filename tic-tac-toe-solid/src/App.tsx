import { Component, createSignal, For, Show } from "solid-js";
import { createStore } from "solid-js/store";

import styles from "./App.module.css";

const App: Component = () => {
  const [board, setBoard] = createStore([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = createSignal("X");
  const [winner, setWinner] = createSignal<string | null>(null);

  function checkWinner() {
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
    // diagonal
    if (board[1][1]) {
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
        return board[1][1];
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0])
        return board[1][1];
    }

    return null;
  }

  function playTurn(i: number, j: number) {
    if (board[i][j]) return;
    if (winner()) return;
    setBoard(i, j, () => currentPlayer());
    setCurrentPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setWinner(() => checkWinner());
  }

  return (
    <>
      <div class={styles.board}>
        <For each={board}>
          {(row, i) => (
            <div class={styles.row}>
              <For each={row}>
                {(col, j) => (
                  <div class={styles.col} onClick={() => playTurn(i(), j())}>
                    {col}
                  </div>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
      <Show when={winner()}>{(winner) => <p>Winner: {winner()}</p>}</Show>
      <Show when={!winner()}>
        {(winner) => <p>Current Player: {currentPlayer()}</p>}
      </Show>
      <button
        style="display: block"
        onClick={() => {
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setCurrentPlayer("X");
          setWinner(null);
        }}
      >
        Reset board
      </button>
    </>
  );
};

export default App;
