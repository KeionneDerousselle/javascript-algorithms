/* eslint-disable array-bracket-spacing */
/* eslint-disable array-element-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable array-bracket-newline */

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.

// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ----- MY SOLUTION -----
const vowels1 = str => {
  if (!str || str.length === 0) return 0

  return str.toLowerCase().split('').reduce((count, char) => count + ([ 'a', 'e', 'i', 'o', 'u' ].includes(char) ? 1 : 0), 0)
}

// ----- SOLUTION 2 -----
const vowels2 = str => {
  if (!str || str.length === 0) return 0
  const matches = str.match(/[aeiou]/gi)

  return matches ? matches.length : 0
}

// ----- SOLUTION 3 -----
const vowels3 = str => {
  if (!str || str.length === 0) return 0

  return str.toLowerCase()
    .split('')
    .filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char))
    .length
}

module.exports = {
  vowels1,
  vowels2,
  vowels3
}
