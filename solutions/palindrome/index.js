// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ----- MY SOLUTION -----
const palindrome1 = str => {
  const reversed = str ? str.split('').reverse().join('') : ''

  return (str === reversed)
}

const palindrome2 = str => {
  if (str === '') return true
  if (!str) return false

  return str.split('').every((char, index) => char === str[str.length - index - 1])
}

module.exports = { palindrome1, palindrome2 }
