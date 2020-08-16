/* eslint-disable no-unused-vars */
// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ----- MY FIRST SOLUTION -----
const reverse1 = str => {
  let reversed = ''

  if (str) {
    for (let i = str.length - 1; i > -1; i--) {
      reversed += str[i]
    }
  }

  return reversed
}

// ----- SOLUTION 2 -----
// this solution reduces potential syntax errors with a traditional for loop, and shows knowledge of loops introduced in es6
const reverse2 = str => {
  let reversed = ''

  if (str) {
    for (const character of str) {
      reversed = character + reversed
    }
  }

  return reversed
}

// ----- SOLUTION 4 -----
// this solution reduces potential syntax errors with a traditional for loop, and shows knowledge of reduce function introduced in es6
const reverse4 = str => str ? str.split('').reduce((reversed, character) => character + reversed, '') : ''

const reverse3 = str => str ? str.split('').reverse().join('') : ''

module.exports = {
  reverse1,
  reverse2,
  reverse3,
  reverse4
}
