import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
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
import { generateItems, checkGameOver, newGame } from './gamedriver.js';

createGrids('player'); // create player grid on dom
createGrids('computer'); // create computer grid on dom
let game = newGame(); // start new game (new player, computer, itemarrays)
game.player.gameboard.setItem(game.playerItems[0], 'vertical', 3, 3);
game.player.gameboard.setItem(game.playerItems[1], 'vertical', 4, 3);
game.player.gameboard.setItem(game.playerItems[2], 'vertical', 5, 3);
game.player.gameboard.setItem(game.playerItems[3], 'vertical', 6, 3);
game.player.gameboard.setItem(game.playerItems[4], 'vertical', 7, 3);
game.computer.gameboard.setItem(game.computerItems[0], 'horizontal', 3, 3);
game.computer.gameboard.setItem(game.computerItems[1], 'horizontal', 3, 4);
game.computer.gameboard.setItem(game.computerItems[2], 'horizontal', 3, 5);
game.computer.gameboard.setItem(game.computerItems[3], 'horizontal', 3, 6);
game.computer.gameboard.setItem(game.computerItems[4], 'horizontal', 3, 7);
connectGrid(game.player); // connect grid to grid array after items are set
connectGrid(game.computer); // connect grid to grid array after items are set
colorItemsOnGrid(); // visually identify items on player grid

let computerMoves = [];
playerAttack(game, computerMoves);
let currentItem;
selectItemToSet(game, currentItem);
