import { generateItems } from './gamedriver.js';

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
      node.dataset.x = x;
      node.dataset.y = y;
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
function tempColorItemsOnGrid() {
  const cellList = document.querySelectorAll('#computerGrid > .cell');
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

function attack(player, itemsArray) {
  let cellList;
  if (player.isRealPlayer) {
    cellList = document.querySelectorAll('#playerGrid > .cell');
  } else {
    cellList = document.querySelectorAll('#computerGrid > .cell');
  }

  cellList.forEach((node) => {
    node.addEventListener('click', () => {
      player.gameboard.receiveAttack(
        itemsArray,
        Number(node.dataset.x) + 1,
        Number(node.dataset.y) + 1,
      );
      node.textContent = 'X';
      console.log(player.gameboard.grid);
      console.log(itemsArray);
    });
  });
}

export {
  createGrids,
  connectGrid,
  colorItemsOnGrid,
  tempColorItemsOnGrid,
  attack,
};
