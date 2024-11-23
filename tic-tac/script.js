const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const restartBtn = document.getElementById('restart-btn');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  let roundWon = false;
  
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameStatus.innerHTML = `Player ${currentPlayer} wins!`;
    isGameActive = false;
    return;
  }

  if (!board.includes('')) {
    gameStatus.innerHTML = 'It\'s a draw!';
    isGameActive = false;
  }
};

const handleCellClick = (e) => {
  const cellIndex = e.target.getAttribute('data-index');
  
  if (board[cellIndex] !== '' || !isGameActive) return;
  
  board[cellIndex] = currentPlayer;
  e.target.innerHTML = currentPlayer;
  
  checkWinner();
  
  if (isGameActive) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.innerHTML = `Player ${currentPlayer}'s turn`;
  }
};

const restartGame = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameStatus.innerHTML = `Player ${currentPlayer}'s turn`;
  isGameActive = true;
  cells.forEach(cell => cell.innerHTML = '');
};

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
