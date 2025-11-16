import Item from './ship.js';
import Gameboard from './gameboard.js';
import Player from './player.js';

// each player sets ships
const player = new Player(true)
const computer = new Player(false)

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