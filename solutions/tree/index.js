// --- Directions

// 1) Create a node class. The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.

// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.

// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(callback, node = this.root) {
    const toTraverse = [node]

    while (toTraverse.length > 0) {
      const currentNode = toTraverse.shift()

      toTraverse.push(...currentNode.children)
      callback(currentNode)
    }
  }

  traverseDF(callback, node = this.root) {
    callback(node)

    if (!node || !node.children || node.children.length === 0) return

    for (const child of node.children) {
      this.traverseDF(callback, child)
    }
  }

  // traverseDF(callback, node = this.root) {
  //   const toTraverse = [node]

  //   while (toTraverse.length > 0) {
  //     const currentNode = toTraverse.shift()

  //     if (currentNode && currentNode.children && currentNode.children.length > 0) {
  //       toTraverse.unshift(...currentNode.children)
  //     }

  //     callback(currentNode)
  //   }
  // }
}

module.exports = { Tree, Node }
