import Gameboard from './gameboard.js'

test('Receive attack', () => {
    const newGameboard = new Gameboard
    newGameboard.receiveAttack(3, 3)
    expect(newGameboard.grid[2][2]).toBe(0)
})