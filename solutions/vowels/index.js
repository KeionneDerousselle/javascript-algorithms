/* eslint-disable no-unused-vars */

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

  return str.toLowerCase().split('').reduce((count, char) => {
    if ([
      'a',
      'e',
      'i',
      'o',
      'u'
    ].includes(char)) {
      count++
    }

    return count
  }, 0)
}

// ----- SOLUTION 2 -----
const vowels2 = str => {
  if (!str || str.length === 0) return 0

  return str.toLowerCase().split('').reduce((count, char) => {
    if ([
      'a',
      'e',
      'i',
      'o',
      'u'
    ].includes(char)) {
      count++
    }

    return count
  }, 0)
}

module.exports = {
  vowels1,
  vowels2
}
