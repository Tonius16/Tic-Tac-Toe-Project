function gameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i][j] = 0;
    }
  }

  const checkIfEmpty = (row, column) => {
    if (board[row][column] === "X" || board[row][column] === "O") {
      return true;
    }
  };

  const getBoard = () => board;
  return { getBoard, checkIfEmpty };
}

function Players(playerName, token) {
  return { playerName: playerName, token: token };
}

function gameControl() {
  let player1 = Players("Toma", "X");

  let player2 = Players("Bozo", "O");

  let currentBoard = gameBoard();

  let activePlayer = player1;

  const changePlayer = () => {
    activePlayer = activePlayer === player1 ? player2 : player1;
  };

  const getActivePlayer = () => {
    activePlayer;
  };

  const placeToken = (row, column) => {
    if (currentBoard.checkIfEmpty(row, column) === true) {
      console.log("space Taken");
    } else {
      currentBoard.getBoard()[row][column] = activePlayer.token;
      console.log(currentBoard.getBoard());
      console.log(`${activePlayer.playerName} has placed a token`);
    }
    changePlayer();
  };

  return { placeToken, changePlayer, getActivePlayer };
}

const game = gameControl();

game.placeToken(1, 1);
game.placeToken(2, 1);
game.placeToken(0, 1);
game.placeToken(0, 2);
game.placeToken(0, 0);
game.placeToken(1, 2);
game.placeToken(1, 0);
game.placeToken(2, 2);
game.placeToken(2, 0);
