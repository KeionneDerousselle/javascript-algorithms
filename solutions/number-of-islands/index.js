/* eslint-disable no-unused-vars */

// ----------- DIRECTIONS -------------
/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 */

 // ----------- EXAMPLES -------------
/**
 * INPUT:
 * [
 *   ["1","1","1","1","0"],
 *   ["1","1","0","1","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","0","0","0"]
 * ]
 *
 * OUTPUT: 1
 * ------------------------------------
 *  * INPUT:
 * [
 *   ["1","1","0","0","0"],
 *   ["1","1","0","0","0"],
 *   ["0","0","1","0","0"],
 *   ["0","0","0","1","1"]
 * ]
 *
 * OUTPUT: 3
 */
const count = (i, j, grid) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) return 0

  grid[i][j] = '0'

  count(i + 1, j, grid)
  count(i - 1, j, grid)
  count(i, j + 1, grid)
  count(i, j - 1, grid)

  return 1
}

const countIslands = grid => {
  if (!grid || !Array.isArray(grid) || grid.length === 0) return 0

  let numOfIslands = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numOfIslands += count(i, j, grid)
      }
    }
  }

  return numOfIslands
}

module.exports = countIslands
