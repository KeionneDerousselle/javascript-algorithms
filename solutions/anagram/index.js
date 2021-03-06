/* eslint-disable no-unused-vars */

// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case

// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ----- MY SOLUTION -----
const getCharMap = str =>
  str.split('').reduce((charMap, char) => {
    if (!charMap[char]) charMap[char] = 0
    charMap[char]++
    return charMap
  }, {})

const cleanString = str => str ? str.replace(/[^\w]/g, '').toLowerCase() : ''

const anagram1 = (stringA, stringB) => {
  const strA = cleanString(stringA)
  const strB = cleanString(stringB)

  if (strA.length !== strB.length) return false

  const strACharMap = getCharMap(strA)
  const strBCharMap = getCharMap(strB)

  return Object.keys(strACharMap).every(key => strBCharMap[key] === strACharMap[key])
}

// ----- SOLUTION 2 -----
const alphabetizeString = str => str.split('').sort().join('')

const anagram2 = (stringA, stringB) =>
  alphabetizeString(cleanString(stringA)) === alphabetizeString(cleanString(stringB))

module.exports = {
  anagram1,
  anagram2
}
