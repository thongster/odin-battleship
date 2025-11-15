import Gameboard from './gameboard.js';
import Ship from './ship.js'

test.only('Set ship', () => {
  const newShip = new Ship(3);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'vertical', 3, 3);
  expect(newGameboard.grid[2][2]).toBe(1);
  expect(newGameboard.grid[2][3]).toBe(1);
  expect(newGameboard.grid[2][4]).toBe(1);
});

test('Receive attack, empty', () => {
  const newGameboard = new Gameboard();
  newGameboard.receiveAttack(3, 3);
  expect(newGameboard.grid[2][2]).toBe(0);
});
