class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data < this.data) {
      if (this.left) return this.left.insert(data)
      this.left = new Node(data)
    }

    if (data > this.data) {
      if (this.right) return this.right.insert(data)
      this.right = new Node(data)
    }
  }

  contains(data) {
    if (this.data === data) return this
    if (this.data > data) return this.left ? this.left.contains(data) : null
    if (this.data < data) return this.right ? this.right.contains(data) : null
  }
}

module.exports = Node
