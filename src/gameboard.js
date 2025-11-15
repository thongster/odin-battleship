import Ship from './ship.js';

export default class Gameboard {
  constructor() {
    // empty = haven't tried
    // 0 = no ship
    // 1 = ship
    this.grid = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ];
  }

  setShip(ship, dir, x, y) {
    x = x - 1;
    y = y - 1;
    // if horizontal
    if (dir === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y] = 1;
        x = x + 1;
      }
    }
    // if vertical
    if (dir === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y] = 1;
        y = y + 1;
      }
    }
  }

  receiveAttack(x, y) {
    x = x - 1;
    y = y - 1;

    if (this.grid[x][y] === '') {
      // if empty
      this.grid[x][y] = 0; // confirmed no ship
    } else if (this.grid[x][y] === '1') {
      // if ship is there
      this.grid[x][y] = 2; // revealed ship
    }
  }
}
