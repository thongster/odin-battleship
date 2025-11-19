import Item from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import {
  createGrids,
  connectGrid,
  colorItemsOnGrid,
  playerAttack,
  computerAttack,
  selectItemToSet,
} from './ui.js';

// generate items at start of game
function generateItems(player) {
  const botd = new Item('Breath of the Dying', 5);
  const hoto = new Item('Heart of the Oak', 4);
  const enigma = new Item('Enigma', 3);
  const spirit = new Item('Spirit', 3);
  const soj = new Item('Stone of Jordan', 2);
  const itemsArray = [botd, hoto, enigma, spirit, soj];
  return itemsArray;
}

function randomComputerSet(game) {
  for (let i = 0; i < game.computerItems.length; i++) {
    let placed = false;

    while (!placed) {
      placed = game.computer.gameboard.setItem(
        game.computerItems[i],
        Math.random() < 0.5 ? 'horizontal' : 'vertical',
        Math.floor(Math.random() * 10) + 1,
        Math.floor(Math.random() * 10) + 1,
      );
    }
  }
}

function newGame() {
  const player = new Player(true);
  const computer = new Player(false);
  const playerItems = generateItems(player);
  const computerItems = generateItems(computer);

  return { player, computer, playerItems, computerItems };
}

function newGamePhase(game) {
  createGrids('player'); // create player grid on dom
  createGrids('computer'); // create computer grid on dom
  randomComputerSet(game); // computer sets new board
  connectGrid(game.player); // connect grid to grid array after items are set
  connectGrid(game.computer); // connect grid to grid array after items are set
}

function playingGamePhase(game) {}

function gameOver(game) {}

function checkGameOver(player) {
  if (player.gameboard.itemCount === 0) {
    console.log('game over');
  }
}

export {
  generateItems,
  checkGameOver,
  newGame,
  randomComputerSet,
  newGamePhase,
};
