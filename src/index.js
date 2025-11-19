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
  toggleAttack
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
let currentItem;
console.log(currentItem)
let itemsAlreadySet = [];
selectItemToSet(game, currentItem, itemsAlreadySet);
toggleAttack()

const resetGameBtn = document.getElementById('resetGame');
resetGameBtn.addEventListener('click', () => {
  game = newGame(); // start new game (new player, computer, itemarrays)
  randomComputerSet(game); // computer sets new board
  connectGrid(game.player); // connect grid to grid array after items are set
  connectGrid(game.computer); // connect grid to grid array after items are set
  clearGridDOM()
  toggleAttack()
  currentItem = undefined;
  itemsAlreadySet = []
  selectItemToSet(game, currentItem, itemsAlreadySet);
  colorItemsOnGrid()
  console.log(game.player.gameboard.grid)
});

// let computerMoves = [];
// playerAttack(game, computerMoves);
