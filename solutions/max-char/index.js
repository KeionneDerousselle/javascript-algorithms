/* eslint-disable no-unused-vars */

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.

// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ----- MY SOLUTION -----
const maxChar = str => {
  let maxOcc = 0
  let mostOccChar = ''

  str.split('').reduce((countMap, char) => {
    if (!countMap[char]) countMap[char] = 0
    countMap[char]++

    if (countMap[char] > maxOcc) {
      maxOcc = countMap[char]
      mostOccChar = char
    }

    return countMap
  }, {})

  return mostOccChar
}

module.exports = maxChar
