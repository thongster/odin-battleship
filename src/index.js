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
  clearGridDOM,
  toggleAttack,
} from './ui.js';
import {
  generateItems,
  checkGameOver,
  newGame,
  randomComputerSet,
  newGamePhase,
  gameState,
  setPhase,
  checkPlacementPhase,
  checkWinCondition,
} from './gamedriver.js';

let game = newGame(); // start new game (new player, computer, itemarrays)
newGamePhase(game); // enter New Game Phase

let itemsAlreadySet = [];
selectItemToSet(game, gameState, itemsAlreadySet);

const resetGameBtn = document.getElementById('resetGame');
resetGameBtn.addEventListener('click', () => {
  document.getElementById("playerGrid").innerHTML = "";
  document.getElementById("computerGrid").innerHTML = "";
  game = newGame();
  newGamePhase(game)
  selectItemToSet(game, gameState, itemsAlreadySet);

  gameState.phase = "placement";
  gameState.currentItem = null;
  gameState.itemsPlaced = 0;
  gameState.computerMoves = [];
});