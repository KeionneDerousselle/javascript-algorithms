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
const arrayChunk1 = (array, size) => {
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

// ----- SOLUTION 2 -----
const arrayChunk2 = (array, size) => {
  const chunked = []

  for (const element of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }

  return chunked
}

// ----- SOLUTION 3 -----
const arrayChunk3 = (array, size) => {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index = index + size
  }

  return chunked
}

module.exports = {
  arrayChunk1,
  arrayChunk2,
  arrayChunk3
}
