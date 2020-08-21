const Node = require('./index')

describe('Binary Search Tree', () => {
  it('should define a constructor on the Node', () => {
    expect(typeof Node.prototype.constructor).toEqual('function')
  })

  it('should insert nodes correctly', () => {
    const node = new Node(10)

    node.insert(5)
    node.insert(15)
    node.insert(17)

    expect(node.left.data).toEqual(5)
    expect(node.right.data).toEqual(15)
    expect(node.right.right.data).toEqual(17)
  })

  it('should return the found node when determining if an existing node is in the tree', () => {
    const node = new Node(10)

    node.insert(5)
    node.insert(15)
    node.insert(20)
    node.insert(0)
    node.insert(-5)
    node.insert(3)

    const three = node.left.left.right

    expect(node.contains(3)).toEqual(three)
  })

  it('should return null when determining if a non-existent node is in the tree', () => {
    const node = new Node(10)

    node.insert(5)
    node.insert(15)
    node.insert(20)
    node.insert(0)
    node.insert(-5)
    node.insert(3)

    expect(node.contains(9999)).toEqual(null)
  })
})
