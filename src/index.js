import './modern-normalize.css';
import './style.css';
import Ship from './ship.js';
import Gameboard from './gameboard.js';

  const newShip = new Ship(5);
  const newGameboard = new Gameboard
  newGameboard.setShip(newShip, 'horizontal', 5, 8);
  newGameboard.receiveAttack(6, 8);
  newGameboard.receiveAttack(5, 8);
  newGameboard.receiveAttack(8, 8);

  console.log(newGameboard)