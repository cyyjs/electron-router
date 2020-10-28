import {add} from '../src/index'

describe('add is ok', () => {
  test('add', () => {
    const sum = add(1, 2)
    expect(sum).toBe(3)
  })
})