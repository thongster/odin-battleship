import Item from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import { createGrids, connectGrid, colorItemsOnGrid } from './ui.js';

    //   botd: { name: 'Breath of the Dying', size: 5 },
    //   hoto: { name: 'Heart of the Oak', size: 4 },
    //   enigma: { name: 'Enigma', size: 3 },
    //   spirit: { name: 'Spirit', size: 3 },
    //   soj: { name: 'Stone of Jordan', size: 2 },

// generate items at start of game
function generateItems(player) {
  const botd = new Item("Breath of the Dying", 5)
  const hoto = new Item("Heart of the Oak", 4)
  const enigma = new Item("Enigma", 3)
  const spirit = new Item("Spirit", 3)
  const soj = new Item("Stone of Jordan", 2)
}

export { generateItems }