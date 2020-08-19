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
const pyramid = n => {
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

module.exports = pyramid
