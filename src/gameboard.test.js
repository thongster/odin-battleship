import Gameboard from './gameboard.js';
import Item from './ship.js';

test('Set item vertical', () => {
  const newGameboard = new Gameboard();
  const newItem = new Item(newGameboard.items.enigma.size);
  newGameboard.setItem(newItem, 'vertical', 3, 3);
  expect(newGameboard.grid[2][2]).toBe(newItem);
  expect(newGameboard.grid[2][3]).toBe(newItem);
  expect(newGameboard.grid[2][4]).toBe(newItem);
});

test('Set item horizontal', () => {
  const newItem = new Item(5);
  const newGameboard = new Gameboard();
  newGameboard.setItem(newItem, 'horizontal', 5, 8);
  expect(newGameboard.grid[4][7]).toBe(newItem);
  expect(newGameboard.grid[5][7]).toBe(newItem);
  expect(newGameboard.grid[6][7]).toBe(newItem);
  expect(newGameboard.grid[7][7]).toBe(newItem);
  expect(newGameboard.grid[8][7]).toBe(newItem);
});

test('Set item if spot already taken', () => {
  const newGameboard = new Gameboard();
  newGameboard.setItem(newGameboard.items.botd, 'horizontal', 5, 8);
  newGameboard.setItem(newGameboard.items.hoto, 'vertical', 5, 8);
  expect(newGameboard.grid[4][7]).toBe(newGameboard.items.botd.name);
  console.log(newGameboard.grid);
});

test('Receive attack, empty', () => {
  const newGameboard = new Gameboard();
  newGameboard.receiveAttack(3, 3);
  expect(newGameboard.grid[2][2]).toBe(0);
});

test('Receive attack, contains item', () => {
  const newItem = new Item(2);
  const newGameboard = new Gameboard();
  newGameboard.setItem(newItem, 'horizontal', 5, 8);
  newGameboard.receiveAttack(5, 8);
  newGameboard.receiveAttack(6, 8);
  expect(newGameboard.grid[4][7]).toBe(newItem);
  expect(newGameboard.grid[5][7]).toBe(newItem);
  expect(newItem.hitCount).toBe(2);
  expect(newItem.foundStatus).toBe(true);
});
