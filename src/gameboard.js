import Item from './ship.js';
export default class Gameboard {
  constructor() {
    // empty = haven't tried
    // 0 = no item there
    // (item name) = item there
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

    this.itemCount = 0;
  }

  setItem(item, dir, x, y) {
    x = x - 1;
    y = y - 1;
    // if cell already contains item, do nothing
    if (this.grid[x][y] != '') {
      return;
    }
    // if horizontal
    if (dir === 'horizontal') {
      for (let i = 0; i < item.length; i++) {
        this.grid[x][y] = item.name;
        x = x + 1;
      }
    }
    // if vertical
    if (dir === 'vertical') {
      for (let i = 0; i < item.length; i++) {
        this.grid[x][y] = item.name;
        y = y + 1;
      }
    }

    // keep track of item count
    this.itemCount++;
  }

  receiveAttack(itemArray, x, y) {
    if (this.grid[x][y] === '') {
      // if empty
      this.grid[x][y] = 0; // confirmed no item
    } else if (this.grid[x][y] != '') {
      // if item is there
      itemArray.forEach((item) => {
        if (item.name === this.grid[x][y]) {
          item.hit(); // add to item hitCount
          item.isFound(); // check if item is found with every hit
          if (item.foundStatus) {
            this.itemCount--; // subtract from itemCount if item is found
          }
        }
      });
    }
  }
}
