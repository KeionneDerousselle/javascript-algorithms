/* eslint-disable no-unused-vars */

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size

// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ----- MY SOLUTION -----
const arrayChunk = (array, size) => {
  const chunks = []
  let chunk = []

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i])

    if ((i + 1) % size === 0 || i === array.length - 1) {
      chunks.push(chunk)
      chunk = []
    }
  }

  return chunks
}

module.exports = arrayChunk
