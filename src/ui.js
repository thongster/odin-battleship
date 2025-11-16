
// populate player and computer visual game boards
function createGrids() {
  const playerGrid = document.getElementById('playerGrid');
  const computerGrid = document.getElementById('computerGrid');

  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    playerGrid.append(cell);
    for (let i = 0; i < 10; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      playerGrid.append(cell);
    }
  }

  for (let i = 0; i < 10; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    computerGrid.append(cell);
    for (let i = 0; i < 10; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      computerGrid.append(cell);
    }
  }
}

function connectGrid() {
    
}

export { createGrids };
