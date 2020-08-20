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

// ----- SOLUTION 2 ------ O(2^n) - SLOW AF
let fib2 = n => {
  if (n < 2) return n

  return fib2(n - 2) + fib2(n - 1)
}

const memoize = fn => {
  const cache = {}

  return (...args) => {
    if (cache[args]) return cache[args]

    const result = fn.apply(this, args)

    cache[args] = result

    return result
  }
}

fib2 = memoize(fib2)

// ----- MY MEMOIZATION FIB SOLUTION ------ O(2^n)
const fib3 = (n, memo = {}) => {
  if (n < 2) return n

  const a = memo[n - 2] || fib3(n - 2, memo)
  const b = memo[n - 1] || fib3(n - 1, memo)

  memo[n] = a + b

  return memo[n]
}

module.exports = {
  fib1,
  fib2,
  fib3
}
