import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';
import {
  createGrids,
  connectGrid,
  colorItemsOnGrid,
  tempColorItemsOnGrid,
  attack,
} from './ui.js';
import { generateItems } from './gamedriver.js';

createGrids('player'); // create player grid on dom
createGrids('computer'); // create computer grid on dom
const player = new Player(true);
const computer = new Player(false);
const playerItems = generateItems(player);
const computerItems = generateItems(computer);
player.gameboard.setItem(playerItems[0], 'vertical', 3, 3);
player.gameboard.setItem(playerItems[1], 'vertical', 4, 3);
player.gameboard.setItem(playerItems[2], 'vertical', 5, 3);
player.gameboard.setItem(playerItems[3], 'vertical', 6, 3);
player.gameboard.setItem(playerItems[4], 'vertical', 7, 3);
computer.gameboard.setItem(computerItems[0], 'horizontal', 3, 3);
computer.gameboard.setItem(computerItems[1], 'horizontal', 3, 4);
computer.gameboard.setItem(computerItems[2], 'horizontal', 3, 5);
computer.gameboard.setItem(computerItems[3], 'horizontal', 3, 6);
computer.gameboard.setItem(computerItems[4], 'horizontal', 3, 7);
connectGrid(player); // connect grid to grid array after items are set
connectGrid(computer); // connect grid to grid array after items are set
colorItemsOnGrid(); // visually identify items on player grid
tempColorItemsOnGrid();
attack(player, playerItems);
attack(computer, computerItems);
