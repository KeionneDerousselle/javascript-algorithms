/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides

// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// ----- MY SOLUTION -----
const pyramid1 = n => {
  if (!n || n < 0) {
    console.log('')
    return
  }

  const gridSize = 2 * n - 1
  const midpoint = Math.floor(gridSize / 2)

  for (let row = 0; row < n; row++) {
    let level = ''

    for (let col = 0; col < gridSize; col++) {
      level += col < midpoint - row || col > midpoint + row ? ' ' : '#'
    }

    console.log(level)
  }
}

// ----- SOLUTION 2 -----

const pyramid2 = (n, row = 0, level = '') => {
  if (!n || n < 0) {
    console.log('')
    return
  }

  // if we are on the last row
  if (row === n) return

  const gridSize = 2 * n - 1

  // if we are on the last column of a row
  if (level.length === gridSize) {
    // print the row
    console.log(level)
    // move on to the next row with an empty level string for the next row
    return pyramid2(n, row + 1)
  }

  // else, determine whether to add a space or # to the row
  const midpoint = Math.floor(gridSize / 2)

  level += level.length < midpoint - row || level.length > midpoint + row ? ' ' : '#'
  // move on to the next column in the row
  pyramid2(n, row, level)
}

module.exports = {
  pyramid1,
  pyramid2
}
