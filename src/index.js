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
import {
  generateItems,
  checkGameOver,
  newGame,
  randomComputerSet,
} from './gamedriver.js';

createGrids('player'); // create player grid on dom
createGrids('computer'); // create computer grid on dom
let game = newGame(); // start new game (new player, computer, itemarrays)
randomComputerSet(game); // randomize computer item placement
connectGrid(game.player); // connect grid to grid array after items are set
connectGrid(game.computer); // connect grid to grid array after items are set

let computerMoves = [];
playerAttack(game, computerMoves);
let currentItem;
selectItemToSet(game, currentItem);
