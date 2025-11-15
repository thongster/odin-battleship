import Gameboard from './gameboard.js';
import Ship from './ship.js'

test('Set ship vertical', () => {
  const newShip = new Ship(3);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'vertical', 3, 3);
  expect(newGameboard.grid[2][2]).toBe(1);
  expect(newGameboard.grid[2][3]).toBe(1);
  expect(newGameboard.grid[2][4]).toBe(1);
});

test.only('Set ship horizontal', () => {
  const newShip = new Ship(5);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'horizontal', 5, 8);
  expect(newGameboard.grid[4][7]).toBe(1);
  expect(newGameboard.grid[5][7]).toBe(1);
  expect(newGameboard.grid[6][7]).toBe(1);
  expect(newGameboard.grid[7][7]).toBe(1);
  expect(newGameboard.grid[8][7]).toBe(1);
});

test('Receive attack, empty', () => {
  const newGameboard = new Gameboard();
  newGameboard.receiveAttack(3, 3);
  expect(newGameboard.grid[2][2]).toBe(0);
});

test('Receive attack, contains ship', () => {
  const newGameboard = new Gameboard();
  newGameboard.receiveAttack(3, 3);
  expect(newGameboard.grid[2][2]).toBe(0);
});