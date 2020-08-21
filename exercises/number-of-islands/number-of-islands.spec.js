/* eslint-disable array-bracket-newline */
/* eslint-disable array-element-newline */
/* eslint-disable array-bracket-spacing */

const countIslands = require('./index')

describe('Count Number of Islands', () => {
  describe('when a falsy value is provided instead of the island grid', () => {
    expect(countIslands()).toBe(0)
  })

  describe('when an empty array is provided instead of the island grid', () => {
    expect(countIslands([])).toBe(0)
  })

  describe('when a non-array value is provided instead of the island grid', () => {
    expect(countIslands('invalid grid')).toBe(0)
  })

  describe('when a valid grid is passed containing an island', () => {
    it('should return that there was one island in the grid', () => {
      expect(countIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ])).toBe(1)
    })
  })

  describe('when a valid grid is passed containing multiple islands', () => {
    it('should return that there were three islands in the grid', () => {
      expect(countIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ])).toBe(3)
    })
  })
})
