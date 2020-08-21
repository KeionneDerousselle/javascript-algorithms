const Node = require('./node')
const validate = require('./index')

describe('Validate Binary Search Tree', () => {
  it('Validate recognizes a valid BST', () => {
    const n = new Node(10)

    n.insert(5)
    n.insert(15)
    n.insert(0)
    n.insert(20)

    expect(validate(n)).toEqual(true)
  })

  it('Validate recognizes an invalid BST', () => {
    const n = new Node(10)

    n.insert(5)
    n.insert(15)
    n.insert(0)
    n.insert(20)
    n.left.left.right = new Node(999)

    expect(validate(n)).toEqual(false)
  })
})
