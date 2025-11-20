import './modern-normalize.css';
import './style.css';
import './index.html';
import { selectItemToSet } from './ui.js';
import { newGame, newGamePhase, gameState } from './gamedriver.js';

let game = newGame(); // start new game (new player, computer, itemarrays)
newGamePhase(game, gameState); // enter New Game Phase

let itemsAlreadySet = [];
selectItemToSet(game, gameState, itemsAlreadySet);

const resetGameBtn = document.getElementById('resetGame');
resetGameBtn.addEventListener('click', () => {
  game = newGame();
  newGamePhase(game);
  selectItemToSet(game, gameState, itemsAlreadySet);

  gameState.phase = 'placement';
  gameState.currentItem = null;
  gameState.itemsPlaced = 0;
  gameState.computerMoves = [];
  gameState.attackPhaseStarted = false;
});
