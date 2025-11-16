import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import { createGrids, connectGrid } from './ui.js';

createGrids("player");
createGrids("computer")
const player = new Player(true)
const computer = new Player(false)
player.gameboard.setItem(player.gameboard.items.botd, 'vertical', 3, 3);
player.gameboard.setItem(player.gameboard.items.hoto, 'vertical', 4, 3);
player.gameboard.setItem(player.gameboard.items.enigma, 'vertical', 5, 3);
player.gameboard.setItem(player.gameboard.items.spirit, 'vertical', 6, 3);
player.gameboard.setItem(player.gameboard.items.soj, 'vertical', 7, 3);
connectGrid(player)
connectGrid(computer)