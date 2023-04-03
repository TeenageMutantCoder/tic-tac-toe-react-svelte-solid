<script lang="ts">
  import Counter from './lib/Counter.svelte'

  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  let currentPlayer = "X"
  let winner = null

  function playTurn(x, y) {
    if (board[x][y]) return
    if (winner) return
    board[x][y] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    winner = checkWinner()
  }

  function checkWinner() {
    for (let row = 0; row < board.length; row++) {
      // horizontal
      if (board[row][0] && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return board[row][0]
      }
      // vertical
      if (board[0][row] && board[0][row] === board[1][row] && board[1][row] === board[2][row]) {
        return board[0][row]
      }
    }
    // diagonal
    if (board[1][1]) {
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[1][1]
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[1][1]
    }
  }
</script>

<main>
  <div class="card">
    <Counter />
  </div>

  <div class="board">
    {#each board as row, i}
      <div class="row">
        {#each row as col, j}
          <div class="col" on:click={() => playTurn(i, j)}>
            {col}
          </div>
        {/each}
      </div>
    {/each}
  </div>

  {#if winner}
    <p>Winner: {winner}</p>
  {:else}
    <p>Current player: {currentPlayer}</p>
  {/if}

  <button on:click={() => {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    currentPlayer = 'X'
    winner = null
  }}>
    Reset board
  </button>

</main>

<style>
  .board {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
  }

  .col {
    width: 50px;
    height: 50px;
    background-color: lightblue;
    border: 1px solid black;
  }
</style>
