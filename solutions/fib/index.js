/* eslint-disable no-unused-vars */

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.

// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.

// Example:
//   fib(4) === 3

// ----- MY SOLUTION ----- O(n)
const fib1 = n => {
  const seq = [ 0, 1 ]

  for (let i = 2; i <= n; i++) {
    seq.push(seq[i - 2] + seq[i - 1])
  }

  return seq[n]
}

// ----- SOLUTION 2 ------
const fib2 = n => {
  if (n < 2) return n

  return fib2(n - 2) + fib2(n - 1)
}

module.exports = {
  fib1,
  fib2
}
