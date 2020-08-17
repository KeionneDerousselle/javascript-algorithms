/* eslint-disable no-unused-vars */

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ----- MY SOLUTION -----
const capitalize = str =>
  str ?
    str
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ') :
    ''

module.exports = capitalize
