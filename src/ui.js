import { generateItems, checkGameOver } from './gamedriver.js';

// populate player and computer visual game boards
function createGrids(player) {
  let grid;
  if (player == 'player') {
    grid = document.getElementById('playerGrid');
  } else {
    grid = document.getElementById('computerGrid');
  }

  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.append(cell);
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.append(cell);
    }
  }
}

function connectGrid(player) {
  let cellList;
  if (player.isRealPlayer) {
    cellList = document.querySelectorAll('#playerGrid > .cell');
  } else {
    cellList = document.querySelectorAll('#computerGrid > .cell');
  }

  let x = 0;
  let y = 0;
  cellList.forEach((node) => {
    node.id = player.gameboard.grid[x][y];
    node.dataset.x = x;
    node.dataset.y = y;
    x++;
    if (x > 9) {
      x = 0;
      y++;
    }
  });
}

function colorItemsOnGrid() {
  const cellList = document.querySelectorAll('#playerGrid > .cell');
  cellList.forEach((node) => {
    switch (node.id) {
      case 'Breath of the Dying':
        node.style.backgroundColor = '#3EE7C9';
        break;
      case 'Heart of the Oak':
        node.style.backgroundColor = '#3BAA44';
        break;
      case 'Enigma':
        node.style.backgroundColor = '#7C4FFF';
        break;
      case 'Spirit':
        node.style.backgroundColor = '#4DA6FF';
        break;
      case 'Stone of Jordan':
        node.style.backgroundColor = '#D8A13D';
        break;
    }
  });
}

// delete this later (we shouldn't know the computer's position)
function revealColorOnHit(node) {
  switch (node.id) {
    case 'Breath of the Dying':
      node.style.backgroundColor = '#3EE7C9';
      break;
    case 'Heart of the Oak':
      node.style.backgroundColor = '#3BAA44';
      break;
    case 'Enigma':
      node.style.backgroundColor = '#7C4FFF';
      break;
    case 'Spirit':
      node.style.backgroundColor = '#4DA6FF';
      break;
    case 'Stone of Jordan':
      node.style.backgroundColor = '#D8A13D';
      break;
  }
}

function playerAttack(game, computerMoves) {
  const cellList = document.querySelectorAll('#computerGrid > .cell');

  cellList.forEach((node) => {
    node.addEventListener('click', () => {
      game.computer.gameboard.receiveAttack(
        game.computerItems,
        Number(node.dataset.x),
        Number(node.dataset.y),
      );
      node.textContent = 'X';
      revealColorOnHit(node);
      checkGameOver(game.computer);
      computerAttack(game, computerMoves);
    });
  });
}

function computerAttack(game, computerMoves) {
  const cellList = document.querySelectorAll('#playerGrid > .cell');
  let randomX = Math.floor(Math.random() * 10); // random X axis move
  let randomY = Math.floor(Math.random() * 10); // random Y axis move
  let newMove = [randomX, randomY];
  while (
    computerMoves.some((move) => {
      return move[0] === newMove[0] && move[1] === newMove[1];
    })
  ) {
    randomX = Math.floor(Math.random() * 10); // random X axis move
    randomY = Math.floor(Math.random() * 10); // random Y axis move
    newMove = [randomX, randomY];
  }
  computerMoves.push(newMove);
  cellList.forEach((node) => {
    if (node.dataset.x == randomX && node.dataset.y == randomY) {
      game.player.gameboard.receiveAttack(game.playerItems, randomX, randomY);
      node.textContent = 'X';
    }
  });

  checkGameOver(game.player);
}

function selectItemToSet(game) {
  const botdButton = document.getElementById('botd');
  const hotoButtom = document.getElementById('hoto');
  const enigmaButton = document.getElementById('enigma');
  const spiritButton = document.getElementById('spirit');
  const sojButton = document.getElementById('soj');
}

export {
  createGrids,
  connectGrid,
  colorItemsOnGrid,
  playerAttack,
  computerAttack,
};
