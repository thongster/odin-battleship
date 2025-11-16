import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import { createGrids, connectGrid, colorItemsOnGrid, tempColorItemsOnGrid, attack } from './ui.js';
import { generateItems } from './gamedriver.js';

createGrids('player'); // create player grid on dom
createGrids('computer'); // create computer grid on dom
const player = new Player(true);
const computer = new Player(false);
generateItems(player)
generateItems(computer)
player.gameboard.setItem(player.gameboard.items.botd, 'vertical', 3, 3);
player.gameboard.setItem(player.gameboard.items.hoto, 'vertical', 4, 3);
player.gameboard.setItem(player.gameboard.items.enigma, 'vertical', 5, 3);
player.gameboard.setItem(player.gameboard.items.spirit, 'vertical', 6, 3);
player.gameboard.setItem(player.gameboard.items.soj, 'vertical', 7, 3);
computer.gameboard.setItem(computer.gameboard.items.botd, 'horizontal', 3, 3);
computer.gameboard.setItem(computer.gameboard.items.hoto, 'horizontal', 3, 4);
computer.gameboard.setItem(computer.gameboard.items.enigma, 'horizontal', 3, 5);
computer.gameboard.setItem(computer.gameboard.items.spirit, 'horizontal', 3, 6);
computer.gameboard.setItem(computer.gameboard.items.soj, 'horizontal', 3, 7);
connectGrid(player); // connect grid to grid array after items are set
connectGrid(computer); // connect grid to grid array after items are set
colorItemsOnGrid(); // visually identify items on player grid
tempColorItemsOnGrid()
attack(player)
attack(computer)