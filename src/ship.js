export default class Item {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.foundStatus = false;
  }

  hit() {
    this.hitCount++;
  }

  isFound() {
    if (this.hitCount == this.length) {
      this.foundStatus = true;
    }
  }
}
