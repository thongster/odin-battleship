export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunkStatus = false;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    if (this.hitCount == this.length) {
      this.sunkStatus = true;
    }
  }
}
