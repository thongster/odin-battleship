import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import { createGrids, connectGrid, colorItemsOnGrid } from './ui.js';

createGrids("player"); // create player grid on dom
createGrids("computer") // create computer grid on dom
const player = new Player(true)
const computer = new Player(false)
player.gameboard.setItem(player.gameboard.items.botd, 'vertical', 3, 3);
player.gameboard.setItem(player.gameboard.items.hoto, 'vertical', 4, 3);
player.gameboard.setItem(player.gameboard.items.enigma, 'vertical', 5, 3);
player.gameboard.setItem(player.gameboard.items.spirit, 'vertical', 6, 3);
player.gameboard.setItem(player.gameboard.items.soj, 'vertical', 7, 3);
connectGrid(player) // connect grid to grid array after items are set
connectGrid(computer) // connect grid to grid array after items are set
colorItemsOnGrid() // visually identify items on player grid