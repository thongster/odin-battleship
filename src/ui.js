import { generateItems, checkGameOver, checkPhase } from './gamedriver.js';

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

  // receive attack and align with x and y axis
  cellList.forEach((node) => {
    if (node.dataset.x == randomX && node.dataset.y == randomY) {
      game.player.gameboard.receiveAttack(game.playerItems, randomX, randomY);
      node.textContent = 'X'; // visually populate cell with X
    }
  });

  checkGameOver(game.player);
}

function selectItemToSet(game, currentItem) {
  const botdButton = document.getElementById('botd');
  const hotoButtom = document.getElementById('hoto');
  const enigmaButton = document.getElementById('enigma');
  const spiritButton = document.getElementById('spirit');
  const sojButton = document.getElementById('soj');
  const rotateButton = document.getElementById('rotate');
  const cellList = document.querySelectorAll('#playerGrid > .cell');
  let direction = 'horizontal';
  let itemsAlreadySet = [];

  // set direction with rotation button
  rotateButton.addEventListener('click', () => {
    direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
  });

  // set current item to botd
  botdButton.addEventListener('click', () => {
    currentItem = game.playerItems[0];
  });
  hotoButtom.addEventListener('click', () => {
    currentItem = game.playerItems[1];
  });
  enigmaButton.addEventListener('click', () => {
    currentItem = game.playerItems[2];
  });
  spiritButton.addEventListener('click', () => {
    currentItem = game.playerItems[3];
  });
  sojButton.addEventListener('click', () => {
    currentItem = game.playerItems[4];
  });

  cellList.forEach((cell, index) => {
    cell.addEventListener('mouseover', () => {
      if (itemsAlreadySet.includes(currentItem)) {
        return;
      }
      const size = currentItem ? currentItem.length : 0;
      if (direction === 'horizontal') {
        for (let i = 0; i < size; i++) {
          const cellToHighlight = cellList[index + i]; // cell + the size
          if (!cellToHighlight) break; // stop if out of bounds
          for (let i of cellToHighlight.dataset.x) {
            if (i >= 9) {
              cellToHighlight.style.boxShadow =
                'inset 0px 0px 10px rgba(0, 0, 0, 0.5)';
              return;
            } else {
              cellToHighlight.style.boxShadow =
                'inset 0px 0px 10px rgba(0, 0, 0, 0.5)';
            }
          }
        }
      }

      if (direction === 'vertical') {
        for (let i = 0; i < size * 10; i = i + 10) {
          const cellToHighlight = cellList[index + i];
          if (!cellToHighlight) break;
          cellToHighlight.style.boxShadow =
            'inset 0px 0px 10px rgba(0, 0, 0, 0.5)';
        }
      }
    });

    cell.addEventListener('mouseout', () => {
      for (let i = 0; i < cellList.length; i++) {
        cellList[i].style.boxShadow = '';
      }
    });

    cell.addEventListener('click', () => {
      if (!currentItem) return;
      // if item already set, don't allow duplicates
      if (itemsAlreadySet.includes(currentItem)) return;

      const size = currentItem ? currentItem.length : 0;
      if (direction === 'horizontal') {
        for (let i = 0; i < size; i++) {
          const cellToHighlight = cellList[index + i]; // cell + the size
          console.log(cellToHighlight)
          if (!cellToHighlight) return; // stop if out of bounds
          for (let i of cellToHighlight.dataset.x) {
            if (i >= 9) return
          }
          if (cellToHighlight.id) return; // stop if cell already has an id
        }
      }
      if (direction === 'vertical') {
        for (let i = 0; i < size * 10; i = i + 10) {
          const cellToHighlight = cellList[index + i];
          console.log(cellToHighlight)
          if (!cellToHighlight) return; // stop if out of bounds
          if (cellToHighlight.id) return; // stop if cell already has an id
        }
      }

      itemsAlreadySet.push(currentItem); // add item to tracking array
      game.player.gameboard.setItem(
        // set item to game board
        currentItem,
        direction,
        Number(cell.dataset.x) + 1,
        Number(cell.dataset.y) + 1,
      );
      connectGrid(game.player); // connect dom grid to gameboard grid
      colorItemsOnGrid(); // display colors
      currentItem = null;
      checkPhase(game)
    });
  });

}

export {
  createGrids,
  connectGrid,
  colorItemsOnGrid,
  playerAttack,
  computerAttack,
  selectItemToSet,
};
