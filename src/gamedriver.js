import Item from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';

// each player sets ships
const player = new Player(true)
const computer = new Player(false)

player.gameboard.setItem(player.gameboard.items.botd, 'vertical', 3, 3);
