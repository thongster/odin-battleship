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

    const coordinates = [];

    for (let i = 0; i < item.length; i++) {
      let tryX = x;
      let tryY = y;
      // check direction, add index per size of item
      if (dir === 'horizontal') {
        tryX = x + i;
      }
      if (dir === 'vertical') {
        tryY = y + i;
      }

      if (tryX > 9 || tryY > 9) return false;
      if (this.grid[tryX][tryY] != '') return false;

      coordinates.push([tryX, tryY]);
    }

    coordinates.forEach(([tryX, tryY]) => {
      this.grid[tryX][tryY] = item.name;
    });

    // keep track of item count
    this.itemCount++;

    return true;
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
