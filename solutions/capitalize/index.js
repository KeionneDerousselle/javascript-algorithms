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
const capitalize1 = str =>
  str ?
    str
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ') :
    ''

// ----- SOLUTION 2 -----
const capitalize2 = str => {
  let result = ''

  if (str) {
    result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
      result += str[i - 1] === ' ' ? str[i].toUpperCase() : str[i]
    }
  }

  return result
}

module.exports = {
  capitalize1,
  capitalize2
}
