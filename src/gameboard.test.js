import Gameboard from './gameboard.js';
import Ship from './ship.js'

test('Set ship vertical', () => {
  const newShip = new Ship(3);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'vertical', 3, 3);
  expect(newGameboard.grid[2][2]).toBe(newShip);
  expect(newGameboard.grid[2][3]).toBe(newShip);
  expect(newGameboard.grid[2][4]).toBe(newShip);
});

test('Set ship horizontal', () => {
  const newShip = new Ship(5);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'horizontal', 5, 8);
  expect(newGameboard.grid[4][7]).toBe(newShip);
  expect(newGameboard.grid[5][7]).toBe(newShip);
  expect(newGameboard.grid[6][7]).toBe(newShip);
  expect(newGameboard.grid[7][7]).toBe(newShip);
  expect(newGameboard.grid[8][7]).toBe(newShip);
});

test('Receive attack, empty', () => {
  const newGameboard = new Gameboard();
  newGameboard.receiveAttack(3, 3);
  expect(newGameboard.grid[2][2]).toBe(0);
});

test('Receive attack, contains ship', () => {
  const newShip = new Ship(2);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'horizontal', 5, 8);
  newGameboard.receiveAttack(5, 8);
  newGameboard.receiveAttack(6, 8);
  expect(newGameboard.grid[4][7]).toBe(newShip);
  expect(newGameboard.grid[5][7]).toBe(newShip);
  expect(newShip.hitCount).toBe(2)
  expect(newShip.sunkStatus).toBe(true)
});