import Ship from './ship.js';
import Gameboard from './gameboard.js';

export default class Player {
    constructor(real) {
        this.isRealPlayer = real
        this.gameboard = new Gameboard
    }
}