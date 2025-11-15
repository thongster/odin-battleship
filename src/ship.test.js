import Ship from './ship.js'

test('Get Ship length', () => {
    expect(new Ship(4).length).toBe(4)
})

test('Get Ship hit count', () => {
    expect(new Ship(4).hitCount).toBe(0)
})


test('Ship hit count, after hit increase', () => {
    let exampleShip = new Ship(4)
    exampleShip.hit()
    exampleShip.hit()
    expect(exampleShip.hitCount).toBe(2)
})

test('Get sunk status', () => {
    expect(new Ship(4).sunkStatus).not.toBeTruthy()
})

test('Get sunk status after ship is hit', () => {
    let exampleShip = new Ship(2)
    exampleShip.hit()
    exampleShip.hit()
    exampleShip.isSunk()
    expect(exampleShip.sunkStatus).toBeTruthy()
})