import Player from './player.js';

test('Set ship vertical', () => {
  const player = new Player(true);
  player.gameboard.setItem(player.gameboard.items.soj, 'vertical', 3, 3);
  console.log(player.gameboard);
  expect(player.gameboard.grid[2][2]).toBe(player.gameboard.items.soj.name);
});
