/* eslint-disable no-unused-vars */

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.

// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ----- MY SOLUTION -----
const reverseInt1 = n => {
  const isNegative = Math.sign(n) < 0
  let numStr = n.toString().split('').reverse().join('')

  if (isNegative) numStr = numStr.substring(0, numStr.length - 1)
  return +`${isNegative ? '-':''}${numStr}`
}

// ----- SOLUTION 2 -----
const reverseInt2 = n => {
  const isNegative = Math.sign(n) < 0
  const numStr = n.toString().split('').reverse().join('')
  const unsignedReversedNum = parseInt(numStr)

  return isNegative ? unsignedReversedNum * -1 : unsignedReversedNum
}

// ----- SOLUTION 3 -----
const reverseInt3 = n => {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = {
  reverseInt1,
  reverseInt2,
  reverseInt3
}
