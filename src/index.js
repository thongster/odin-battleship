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
  newGamePhase,
} from './gamedriver.js';

let game = newGame(); // start new game (new player, computer, itemarrays)
newGamePhase(game); // enter New Game Phase
let phase = 'new game'
    let currentItem;
    selectItemToSet(game, currentItem);

// let computerMoves = [];
// playerAttack(game, computerMoves);

