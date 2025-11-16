import Item from './ship.js';

test('Get Ship length', () => {
  expect(new Item(4).length).toBe(4);
});

test('Get Ship hit count', () => {
  expect(new Item(4).hitCount).toBe(0);
});

test('Ship hit count, after hit increase', () => {
  let exampleShip = new Item(4);
  exampleShip.hit();
  exampleShip.hit();
  expect(exampleShip.hitCount).toBe(2);
});

test('Get found status', () => {
  expect(new Item(4).foundStatus).not.toBeTruthy();
});

test('Get sunk status after ship is hit', () => {
  let exampleShip = new Item(2);
  exampleShip.hit();
  exampleShip.hit();
  exampleShip.isFound();
  expect(exampleShip.foundStatus).toBeTruthy();
});
