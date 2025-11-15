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
    this.shipCount = 0
  }

  setShip(ship, dir, x, y) {
    x = x - 1;
    y = y - 1;
    // if horizontal
    if (dir === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y] = ship;
        x = x + 1;
      }
    }
    // if vertical
    if (dir === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y] = ship;
        y = y + 1;
      }
    }

    // keep track of ship count
    this.shipCount++
  }

  receiveAttack(x, y) {
    x = x - 1;
    y = y - 1;

    if (this.grid[x][y] === '') {
      // if empty
      this.grid[x][y] = 0; // confirmed no ship
    } else if (this.grid[x][y] != '') {
      // if ship is there
      const ship = this.grid[x][y]
      ship.hit() // add to ship hitCount
      ship.isSunk() // check if ship is sunk with every hit
      if (ship.sunkStatus) {
        this.shipCount-- // subtract from shipCount if ship is sunk
      }
    }
  }
}
