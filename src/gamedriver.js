import Item from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import { createGrids, connectGrid, colorItemsOnGrid, attack } from './ui.js';

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

function newGame() {
    const player = new Player(true);
    const computer = new Player(false);
    const playerItems = generateItems(player);
    const computerItems = generateItems(computer);

    return { player, computer, playerItems, computerItems }
}

function checkGameOver(player) {
    if (player.gameboard.itemCount === 0) {
        console.log("game over")
    }
}

function resetGame(player) {
    player = new Player(true)
}

export { generateItems, checkGameOver, newGame };
