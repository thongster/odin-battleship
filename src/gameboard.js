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
    this.items = {
      botd: { name: "Breath of the Dying", size: 5 },
      hoto: { name: "Heart of the Oak", size: 4 },
      enigma: { name: "Enigma", size: 3 },
      spirit: { name: "Spirit", size: 3 },
      soj: { name: "Stone of Jordan", size: 2 }
    }
    this.itemCount = 0;
  }

  setItem(item, dir, x, y) {
    x = x - 1;
    y = y - 1;
    // if horizontal
    if (dir === 'horizontal') {
      for (let i = 0; i < item.length; i++) {
        this.grid[x][y] = item;
        x = x + 1;
      }
    }
    // if vertical
    if (dir === 'vertical') {
      for (let i = 0; i < item.length; i++) {
        this.grid[x][y] = item;
        y = y + 1;
      }
    }

    // keep track of item count
    this.itemCount++;
  }

  receiveAttack(x, y) {
    x = x - 1;
    y = y - 1;

    if (this.grid[x][y] === '') {
      // if empty
      this.grid[x][y] = 0; // confirmed no item
    } else if (this.grid[x][y] != '') {
      // if item is there
      const item = this.grid[x][y];
      item.hit(); // add to item hitCount
      item.isFound(); // check if item is found with every hit
      if (item.foundStatus) {
        this.itemCount--; // subtract from itemCount if item is found
      }
    }
  }
}
