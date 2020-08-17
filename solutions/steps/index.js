/* eslint-disable no-unused-vars */

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!

// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ---- SOLUTION 1 -----
const steps1 = n => {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let col = 0; col < n; col++) {
      stair += col <= row ? '#' : ' '
    }

    console.log(stair)
  }
}

// ----- SOLUTION 2 -----
const steps2 = (n, row = 0, stair = '') => {
  if (row === n) return

  if (stair.length === n) {
    console.log(stair)
    return steps2(n, row + 1)
  }

  stair += stair.length <= row ? '#' : ' '
  steps2(n, row, stair)
}

module.exports = {
  steps1,
  steps2
}
