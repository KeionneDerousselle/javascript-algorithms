/* eslint-disable no-unused-vars */

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.

// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const END_OF_LEVEL = 'END_OF_LEVEL_MARKER'

const levelWidth = root => {
  const levelCounts = [0]
  const toTraverse = [ root, END_OF_LEVEL ]

  while (toTraverse.length > 1) {
    const node = toTraverse.shift()

    if (node === END_OF_LEVEL) {
      levelCounts.push(0)
      toTraverse.push(END_OF_LEVEL)
    } else {
      levelCounts[levelCounts.length - 1]++
      toTraverse.push(...node.children)
    }
  }

  return levelCounts
}

module.exports = levelWidth
